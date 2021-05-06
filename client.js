var io = require("socket.io-client");
var socket = io("ws://127.0.0.1:3000");
socket.on('connect', () => {
  console.log("connect");
  socket.emit('message', 'PEPITO');
});
socket.on('message', (msg) => {
  console.log('Recieved: ', msg);
});
