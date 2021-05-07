# Socketio server

## Description

This is a basic node server that uses the [socket io](https://socket.io/) library to enable real-time event-based communication between clients and the eserver. 

The purpose of this server is to listen to a message sent from a client and broadcasts that same message to all connected devices. This means that all devices **except the sender** will receive the message.

This is the backend implementation that is used to send and receive messages from m5 atom devices. The client-side code can be found in [this repo](https://github.com/nicolas-fricke/m5stack-atom-morsy-talky). 

## Installation

Clone the project and navigate to the project directory:
```
git clone https://github.com/Marta83/socketio_server.git
cd socket socketio_server
```

Create a `.env` file with the port you want your server to listen to. If there is no `PORT` environmente variable it will default to port 3000.

## Running the server
Install dependencies and run the server with the provided script to start the project in development mode:

```
npm i
npm run dev
```
There is a `client.js` file that can be used to test some client connections. To run an instance of a client run the following command:

```
node client.js
```

## Credits
- [Nicolas Fricke](https://github.com/nicolas-fricke)
- [Marta Ruiz](https://github.com/Marta83)
- [Jesús López](https://github.com/jesuslopezxing)
- [Brian Acosta](https://github.com/briandorian)
- [Aaron Ciaghi](https://github.com/aaronsama)
- [Sean Daryanani](https://github.com/seand52)