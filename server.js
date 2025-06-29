const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const PORT = process.env.PORT || 3000;




app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/welcome.html');
  
});
app.get('/index.html', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});
app.use(express.static('public'));
// In-memory player store
// Format: { socketId: { name, wpm, room, startedAt, finishedAt } }
let players = {};

// Helper: get all players in a room
function getPlayersInRoom(room) {
  return Object.fromEntries(
    Object.entries(players).filter(([_, p]) => p.room === room)
  );
}

io.on('connection', (socket) => {
  console.log(`🟢 Player connected: ${socket.id}`);

  // Initialize player
  players[socket.id] = {
    name: 'Anonymous',
    wpm: 0,
    room: null,
    startedAt: null,
    finishedAt: null,
  };

  socket.on('joinRoom', ({ room, name }) => {
    socket.join(room);
    players[socket.id] = {
      name,
      wpm: 0,
      room,
      startedAt: Date.now(),
      finishedAt: null,
    };
    console.log(`✅ ${name} joined room ${room}`);
    io.to(room).emit('progressUpdate', getPlayersInRoom(room));
  });

  socket.on('registerName', (name) => {
    if (players[socket.id]) {
      players[socket.id].name = name;
      console.log(`✅ Registered name: ${name} for socket ${socket.id}`);
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
    if (!player) return;
    const currentRoom = player.room;
    if (!currentRoom) return;

    player.finishedAt = Date.now();

    const roomPlayers = Object.values(players).filter(p => p.room === currentRoom);
    const allDone = roomPlayers.length > 1 && roomPlayers.every(p => p.wpm > 0 && p.finishedAt !== null);

    if (allDone) {
      let winner = null;
      let topScore = -1;
      for (const p of roomPlayers) {
        if (p.wpm > topScore) {
          topScore = p.wpm;
          winner = p.name;
        }
      }
      io.to(currentRoom).emit('announceWinner', { name: winner, wpm: topScore });
    }
  });

  socket.on('disconnect', () => {
    const player = players[socket.id];
    if (!player) return;
    const room = player.room;
    delete players[socket.id];
    if (room) {
      io.to(room).emit('progressUpdate', getPlayersInRoom(room));
      if (!Object.values(players).some(p => p.room === room)) {
        console.log(`Room ${room} is now empty.`);
      }
    } else {
      io.emit('progressUpdate', players);
    }
    console.log(`🔴 Player disconnected: ${socket.id}`);
  });
});

http.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
