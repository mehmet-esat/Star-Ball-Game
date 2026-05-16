const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// İstemcilere (oyunculara) bulunduğumuz klasördeki HTML/CSS/JS dosyalarını sunalım
app.use(express.static(__dirname));

// Bir bilgisayar (istemci) oyuna bağlandığında çalışacak kod
io.on('connection', (socket) => {
    console.log('Yeni bir oyuncu bağlandı! Soket ID:', socket.id);

    // Oyuncu oyundan çıktığında
    socket.on('disconnect', () => {
        console.log('Oyuncu ayrıldı:', socket.id);
    });
});

// Sunucuyu 3000 portunda başlatalım
const PORT = 3000;
http.listen(PORT, '0.0.0.0', () => {
    console.log(`Sunucu çalışıyor! Sınıftakiler bağlanabilir. Port: ${PORT}`);
});