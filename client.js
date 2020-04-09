const net = require('net');
const client = net.createConnection({
  host: 'localhost',
  port: 4000
});

client.setEncoding('utf8');

client.on('data', (data) => {
  console.log(data);
});