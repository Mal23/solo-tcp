const net = require('net');

const client = net.createConnection(7890, () => {
  console.log('I am connected');
  client.write('hello I am a client');
});
