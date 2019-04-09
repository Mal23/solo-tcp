const net = require('net');

const client = net.createConnection(6248, () => {
  console.log('I am connected');
  client.write('hello I am a client');
});
