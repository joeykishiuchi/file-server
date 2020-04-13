const net = require('net');
const readline = require('readline');
//establish connection to server
const client = net.createConnection({
  host: 'localhost',
  port: 4000
});
// create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// sets all incoming data to utf8
client.setEncoding('utf8');
// processes incoming server data and logs to console
client.on('data', (data) => {
  console.log(data);
});

rl.on('line', (file) => {
  client.write(file);
});
 

