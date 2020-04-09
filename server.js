const net = require('net');
const server = net.createServer();

server.listen(4000, () => {
  console.log('Server listening on port 4000!')
});

server.on('connection', (client) => {
  console.log('Client Connected');
  client.write('You have connected to port 4000!');
});