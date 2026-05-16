const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname));

let players = {};
// Topun sunucudaki merkezi fizik durumu
let ballState = {
    x: 800,
    y: 450,
    vx: 0,
    vy: 0,
    radius: 10
};

// Oyunun genel skor ve zaman durumu
let gameState = {
    scoreRed: 0,
    scoreBlue: 0,
    gameTime: 0,
    isGameActive: false,
    isPaused: false
};

io.on('connection', (socket) => {
    console.log('Yeni Bağlantı:', socket.id);

    // Her yeni bağlananı spectator olarak hafızaya al ve başlangıç koordinatlarını ver
    players[socket.id] = {
        id: socket.id,
        name: "Oyuncu",
        team: "spectator",
        x: 800,
        y: 450,
        vx: 0,
        vy: 0,
        radius: 22,
        avatar: '7',
        goals: 0,
        isKicked: false,
        inputs: { w: false, a: false, s: false, d: false, space: false, f: false }
    };

    // Mevcut durumu yeni gelene bildir
    io.emit('updatePlayers', Object.values(players));
    socket.emit('syncBall', ballState);

    socket.on('setNickname', (name) => {
        if (players[socket.id]) {
            players[socket.id].name = name;
            io.emit('updatePlayers', Object.values(players));
        }
    });

    socket.on('joinTeam', (team) => {
        if (players[socket.id]) {
            players[socket.id].team = team;
            // Takıma giren oyuncuyu sahadaki başlangıç noktasına koyalım
            if (team === 'red') {
                players[socket.id].x = 400;
                players[socket.id].y = 450;
            } else if (team === 'blue') {
                players[socket.id].x = 1200;
                players[socket.id].y = 450;
            }
            io.emit('updatePlayers', Object.values(players));
        }
    });

    // Oyuncudan gelen anlık tuş basma verileri
    socket.on('playerInput', (keys) => {
        if (players[socket.id]) {
            players[socket.id].inputs = keys;
        }
    });

    // Admin oyunu başlattığında veya durdurduğunda
    socket.on('adminToggleGame', (state) => {
        gameState.isGameActive = state;
        if (state) {
            ballState.x = 800;
            ballState.y = 450;
            ballState.vx = 0;
            ballState.vy = 0;
        }
        io.emit('gameStatusChanged', gameState);
    });

    socket.on('disconnect', () => {
        console.log('Ayrıldı:', socket.id);
        delete players[socket.id];
        io.emit('updatePlayers', Object.values(players));
    });
});

// Sunucu tarafında saniyede 60 kez çalışan ana fizik motoru döngüsü (60 FPS Tick)
setInterval(() => {
    let playerList = Object.values(players);
    
    // 1. Oyuncu hareketlerini hesapla
    playerList.forEach(p => {
        if (p.team === 'spectator' || p.isKicked) return;

        let moveX = 0;
        let moveY = 0;
        if (p.inputs.w) moveY -= 1;
        if (p.inputs.s) moveY += 1;
        if (p.inputs.a) moveX -= 1;
        if (p.inputs.d) moveX += 1;

        let accel = 0.045;
        let maxSpeed = 0.85;

        if (moveX !== 0 || moveY !== 0) {
            let length = Math.sqrt(moveX * moveX + moveY * moveY);
            p.vx += (moveX / length) * accel;
            p.vy += (moveY / length) * accel;
        }

        p.vx *= 0.975;
        p.vy *= 0.975;

        p.x += p.vx * 15; // Çarpan yerel hızı eşitlemek için
        p.y += p.vy * 15;

        // Saha sınırları dışına taşma kontrolü
        if (p.x - p.radius < 100) { p.x = 100 + p.radius; p.vx = 0; }
        if (p.x + p.radius > 1500) { p.x = 1500 - p.radius; p.vx = 0; }
        if (p.y - p.radius < 100) { p.y = 100 + p.radius; p.vy = 0; }
        if (p.y + p.radius > 800) { p.y = 800 - p.radius; p.vy = 0; }
    });

    // 2. Topun basit hareket fiziği
    ballState.x += ballState.vx;
    ballState.y += ballState.vy;
    ballState.vx *= 0.997;
    ballState.vy *= 0.997;

    // Oyuncuların topa vurma/çarpma kontrolü
    playerList.forEach(p => {
        if (p.team === 'spectator' || p.isKicked) return;

        let dx = ballState.x - p.x;
        let dy = ballState.y - p.y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        let minDist = p.radius + ballState.radius;

        if (dist < minDist + 15 && (p.inputs.space)) { // Şut vurma alanı
            let nx = dx / dist;
            let ny = dy / dist;
            ballState.vx = nx * 12;
            ballState.vy = ny * 12;
        } else if (dist < minDist) { // Normal çarpışma
            let nx = dx / dist;
            let ny = dy / dist;
            ballState.x = p.x + nx * minDist;
            ballState.y = p.y + ny * minDist;
            ballState.vx = nx * 3;
            ballState.vy = ny * 3;
        }
    });

    // Topun duvarlardan sekmesi
    if (ballState.y - ballState.radius < 150 || ballState.y + ballState.radius > 750) ballState.vy *= -0.8;
    if (ballState.x - ballState.radius < 150 || ballState.x + ballState.radius > 1450) {
        // Kale içi değilse sek
        if (ballState.y < 350 || ballState.y > 550) {
            ballState.vx *= -0.8;
        } else {
            // GOL OLDU DURUMU! Merkez noktaya alalım
            ballState.x = 800;
            ballState.y = 450;
            ballState.vx = 0;
            ballState.vy = 0;
        }
    }

    // Her tick durumunda tüm odadaki oyunculara yeni koordinatları yayınla
    io.emit('physicsUpdate', {
        players: playerList.map(p => ({ id: p.id, x: p.x, y: p.y, team: p.team, name: p.name, avatar: p.avatar, goals: p.goals })),
        ball: ballState
    });
}, 1000 / 60);

const PORT = process.env.PORT || 3000;
http.listen(PORT, '0.0.0.0', () => {
    console.log(`Fizik Sunucusu Aktif! Port: ${PORT}`);
});