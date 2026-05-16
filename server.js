const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname));

let players = {}; // Sunucudaki tüm oyuncuların listesi burada tutulacak

io.on('connection', (socket) => {
    console.log('Yeni oyuncu:', socket.id);

    // Yeni biri bağlandığında onu Spectator (İzleyici) olarak listeye ekle
    players[socket.id] = {
        id: socket.id,
        name: "Oyuncu",
        team: "spectator",
        isKicked: false,
        goals: 0,
        avatar: '7'
    };

    // Güncel oyuncu listesini odadaki herkese gönder
    io.emit('updatePlayers', Object.values(players));

    // Birisi ismini değiştirdiğinde
    socket.on('setNickname', (name) => {
        if(players[socket.id]) {
            players[socket.id].name = name;
            io.emit('updatePlayers', Object.values(players)); // Herkese yeni ismi bildir
        }
    });

    // Birisi takıma katıldığında
    socket.on('joinTeam', (team) => {
        if(players[socket.id]) {
            players[socket.id].team = team;
            io.emit('updatePlayers', Object.values(players)); // Herkese takım değişimini bildir
        }
    });

    // Biri oyundan çıktığında/sekme kapattığında
    socket.on('disconnect', () => {
        console.log('Ayrıldı:', socket.id);
        delete players[socket.id]; // Onu listeden sil
        io.emit('updatePlayers', Object.values(players)); // Kalanlara yeni listeyi gönder
    });
});

const PORT = process.env.PORT || 3000;
http.listen(PORT, '0.0.0.0', () => {
    console.log(`Sunucu çalışıyor! Port: ${PORT}`);
});