const net = require('net');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '>'
});

const connectionToServer = net.createConnection(6248, () => {
  console.log('I am connected');
  
  rl.prompt();
  rl.on('line', line => {
    connectionToServer.write(line);
    rl.prompt();
  });
});

connectionToServer.on('data', data => {
  console.log(`\n${data.toString()}`);
  rl.prompt();
});
