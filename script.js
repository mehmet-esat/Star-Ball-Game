const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const socket = io();
let players = []; 
let localPlayerId = null; 
let ball = { x: 800, y: 450, radius: 10, color: '#ffed4f' };

const L_WIDTH = 1600; const L_HEIGHT = 900;
const keys = { w: false, a: false, s: false, d: false, space: false, f: false };

let isGameActive = false;
let isAdmin = false;
const ADMIN_PASSWORD = '1234';

socket.on('connect', () => {
    localPlayerId = socket.id; 
});

// Sunucudan saniyede 60 kez gelen konum verileriyle ekranı güncelle
socket.on('physicsUpdate', (data) => {
    players = data.players;
    ball.x = data.ball.x;
    ball.y = data.ball.y;
    updateLobbyUI();
});

socket.on('gameStatusChanged', (gameState) => {
    isGameActive = gameState.isGameActive;
});

function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
window.addEventListener('resize', resizeCanvas); resizeCanvas();

function handleAuthLogin() {
    const pwd = document.getElementById('auth-password').value;
    const errEl = document.getElementById('auth-error');
    if (pwd === ADMIN_PASSWORD) {
        isAdmin = true;
        document.getElementById('auth-modal').classList.add('hidden');
        showNicknameModal();
    } else {
        errEl.textContent = 'Yanlış şifre!';
    }
}

function handleAuthSkip() {
    isAdmin = false;
    document.getElementById('auth-modal').classList.add('hidden');
    showNicknameModal();
}

function showNicknameModal() {
    const modal = document.getElementById('nickname-modal');
    modal.style.display = 'flex';
    modal.classList.remove('hidden');
}

function handleNicknameSubmit() {
    const input = document.getElementById('nickname-input');
    const nick = input.value.trim();
    if (nick.length >= 2) {
        socket.emit('setNickname', nick);
        document.getElementById('nickname-modal').style.display = 'none';
        if (isAdmin) {
            document.getElementById('admin-badge').style.display = 'block';
        }
    }
}

function updateLobbyUI() {
    const listRed = document.getElementById('list-red');
    const listBlue = document.getElementById('list-blue');
    const listSpec = document.getElementById('list-spectators');
    if(!listRed || !listBlue || !listSpec) return;
    
    listRed.innerHTML = ""; listBlue.innerHTML = ""; listSpec.innerHTML = "";
    
    players.forEach(p => {
        let li = document.createElement('li');
        li.innerText = p.name + (p.goals > 0 ? ` (⚽ ${p.goals})` : '');
        if (p.team === 'red') listRed.appendChild(li);
        else if (p.team === 'blue') listBlue.appendChild(li);
        else listSpec.appendChild(li);
    });
}

function joinTeam(teamName) {
    socket.emit('joinTeam', teamName);
}

function toggleGameState() {
    if (!isAdmin) return;
    isGameActive = !isGameActive;
    socket.emit('adminToggleGame', isGameActive);
    document.getElementById('setup-menu').classList.remove('visible');
}

// Klavye tuş basışlarını algıla ve anında sunucuya fırlat
window.addEventListener('keydown', (e) => {
    let k = e.key.toLowerCase();
    if(k === 'w' || e.key === 'ArrowUp') keys.w = true;
    if(k === 'a' || e.key === 'ArrowLeft') keys.a = true;
    if(k === 's' || e.key === 'ArrowDown') keys.s = true;
    if(k === 'd' || e.key === 'ArrowRight') keys.d = true;
    if(e.code === 'Space') keys.space = true;
    if(k === 'f') keys.f = true;
    
    socket.emit('playerInput', keys);
});

window.addEventListener('keyup', (e) => {
    let k = e.key.toLowerCase();
    if(k === 'w' || e.key === 'ArrowUp') keys.w = false;
    if(k === 'a' || e.key === 'ArrowLeft') keys.a = false;
    if(k === 's' || e.key === 'ArrowDown') keys.s = false;
    if(k === 'd' || e.key === 'ArrowRight') keys.d = false;
    if(e.code === 'Space') keys.space = false;
    if(k === 'f') keys.f = false;
    
    socket.emit('playerInput', keys);
});

// Sadece ekrana çizim yapan hafif render döngüsü
function draw() {
    ctx.fillStyle = '#2b2c3a'; ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.save(); 

    const scale = Math.min(canvas.width / L_WIDTH, canvas.height / L_HEIGHT);
    const offsetX = (canvas.width - L_WIDTH * scale) / 2; const offsetY = (canvas.height - L_HEIGHT * scale) / 2;
    ctx.translate(offsetX, offsetY); ctx.scale(scale, scale);

    // Sahayı çiz
    ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 5;
    ctx.strokeRect(150, 150, 1300, 600); // Dış Çizgiler
    ctx.beginPath(); ctx.moveTo(800, 150); ctx.lineTo(800, 750); ctx.stroke(); // Orta Çizgi
    ctx.beginPath(); ctx.arc(800, 450, 90, 0, Math.PI * 2); ctx.stroke(); // Orta Yuvarlak

    // Kaleleri Çiz
    ctx.fillStyle = '#f2504b'; ctx.fillRect(100, 350, 50, 200);
    ctx.fillStyle = '#5784f2'; ctx.fillRect(1450, 350, 50, 200);

    // Aktif oyuncuları çiz
    players.forEach(p => {
        if (p.team === 'spectator') return;
        ctx.beginPath(); ctx.arc(p.x, p.y, 22, 0, Math.PI * 2);
        ctx.fillStyle = p.team === 'red' ? '#f2504b' : '#5784f2'; ctx.fill();
        ctx.lineWidth = 3; ctx.strokeStyle = '#000'; ctx.stroke();

        // Numarayı çiz
        ctx.fillStyle = '#fff'; ctx.font = 'bold 18px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText(p.avatar || '7', p.x, p.y + 2);

        // İsmi çiz
        ctx.fillStyle = '#fff'; ctx.font = 'bold 16px Arial'; ctx.fillText(p.name, p.x, p.y - 35);
    });

    // Topu çiz
    ctx.beginPath(); ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = ball.color; ctx.fill();
    ctx.lineWidth = 2; ctx.strokeStyle = '#000'; ctx.stroke();

    ctx.restore();
    requestAnimationFrame(draw);
}

document.getElementById('menu-btn').addEventListener('click', () => {
    document.getElementById('setup-menu').classList.add('visible');
});

requestAnimationFrame(draw);