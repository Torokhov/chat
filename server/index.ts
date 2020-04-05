import path from 'path';
import express from 'express';

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static(path.resolve('./build')));

app.get('/', function (req, res) {
  res.sendFile(path.resolve('./build/index.html'))
});

io.on('connection', () => {
  console.log('a user connected');
});

http.listen(3001, () => {
  console.log('Example app listening on port 3001!');
});
