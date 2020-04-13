const net = require('net');
const retrieveFile = require('./retrieveFile');
const server = net.createServer();
// opens server
server.listen(4000, () => {
  console.log('Server listening on port 4000!')
});
// Establishing a client connection
server.on('connection', (client) => {
  client.setEncoding('utf8');
  console.log('Client Connected');
  client.write('You have connected to port 4000!');
  client.on('data', data => {
    retrieveFile(data, (content) => {
      client.write(content);
    });
  });
});