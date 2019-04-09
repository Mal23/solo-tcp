const net = require('net');

//every client is a socket
const server = net.createServer(client => {
  console.log('client connected!');
  client.on('data', data => {
    console.log(data.toString());
  });
});

server.listen(7890);
