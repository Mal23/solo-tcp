const net = require('net');

const allClients = [];
//every client is a socket
const server = net.createServer(connectedClient => {
  console.log('client connected!');
  allClients.push(connectedClient);
  
  //client.pipe(client);
  connectedClient.on('data', data => {
    console.log(data);
    client.write(`ECHO FROM SERVER: ${data}`);
  });
});

server.listen(6248);
