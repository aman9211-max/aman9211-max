const http = require('http')
const express = require('express')
const app = express()
const socketio = require('socket.io')
app.use('/', express.static(__dirname + '/public'))

const server = http.createServer(app)
const io = socketio(server);


io.on('connection', (socket) => {
  console.log('connected with socket id = ', socket.id)
})



server.listen(3344, () => {
  console.log('Started on http://localhost:3344')
})