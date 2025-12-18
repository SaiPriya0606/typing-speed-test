const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');
const PORT = process.env.PORT || 3000;

// FORCE welcome.html as homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'welcome.html'));
});

// Game page
app.get('/game', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.use(express.static('public'));

// Catch all other routes - redirect to welcome
app.get('*', (req, res) => {
  res.redirect('/');
});

// Rest of your socket.io code remains same...
let players = {};

function getPlayersInRoom(room) {
  return Object.fromEntries(
    Object.entries(players).filter(([id, p]) => p.room === room)
  );
}

io.on('connection', (socket) => {
  console.log('Player connected:', socket.id);
  players[socket.id] = { name: 'Anonymous', wpm: 0, room: null, startedAt: null, finishedAt: null };

  socket.on('joinRoom', (room, name) => {
  socket.join(room);
  players[socket.id] = { name: name || 'Anonymous', wpm: 0, room, startedAt: Date.now(), finishedAt: null };
  console.log(`${name || 'Anonymous'} joined room ${room}`);
  io.to(room).emit('progressUpdate', getPlayersInRoom(room));
});


  socket.on('registerName', (name) => {
    if (players[socket.id]) {
      players[socket.id].name = name;
      io.emit('progressUpdate', players);
    }
  });

  socket.on('updateProgress', (data) => {
    const player = players[socket.id];
    if (player) {
      player.wpm = data.wpm;
      if (player.room) {
        io.to(player.room).emit('progressUpdate', getPlayersInRoom(player.room));
      } else {
        io.emit('progressUpdate', players);
      }
    }
  });

  socket.on('raceEnd', () => {
    const player = players[socket.id];
    if (!player || !player.room) return;
    player.finishedAt = Date.now();
    const roomPlayers = Object.values(players).filter(p => p.room === player.room);
    const allDone = roomPlayers.every(p => p.wpm > 0 && p.finishedAt !== null);
    
    if (allDone) {
      let winner = null, topScore = -1;
      for (const p of roomPlayers) {
        if (p.wpm > topScore) {
          topScore = p.wpm;
          winner = p.name;
        }
      }
      io.to(player.room).emit('announceWinner', { name: winner, wpm: topScore });
    }
  });

  socket.on('disconnect', () => {
    const player = players[socket.id];
    if (!player) return;
    const room = player.room;
    delete players[socket.id];
    if (room) {
      io.to(room).emit('progressUpdate', getPlayersInRoom(room));
    }
    console.log('Player disconnected:', socket.id);
  });
});

http.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Welcome page: http://localhost:' + PORT);
});
