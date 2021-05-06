const http = require('http')
const server = http.createServer();
const { Server } = require("socket.io");
const io = new Server(server);
const port = process.env.PORT || 3000;

io.on('connection', (socket) => {
  console.log('New connection');
  socket.on('message', (msg) => {
    socket.broadcast.emit('message', msg);
  });

  socket.on('typing', (name_of_sender) => {
    socket.broadcast.emit('wait_for_message', name_of_sender);
  });

  socket.onAny((event, payload) => {
    console.log("event: ", event, "payload: ", payload);
  });
});

server.listen(port, () => {
  console.log(`listening on *:${port}`);
});
