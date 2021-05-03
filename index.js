const http = require('http')
const server = http.createServer();
const { Server } = require("socket.io");
const io = new Server(server);
const port = process.env.PORT || 3000;

io.on('connection', (socket) => {
  console.log('New connection');
  socket.on('input', (msg) => {
    console.log(`Input ${msg}`);
    socket.broadcast.emit('output', msg);
  });
});

server.listen(port, () => {
  console.log('listening on *:3000');
});
