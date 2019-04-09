const fs = require('fs');

const ws = fs.createWriteStream('./spot.json');

//write a dog to spot.json in multiple chunks
ws.write('{');
ws.write('\n\t"name": "spot",');
ws.write('\n\t');
ws.write('"age": 15,');
ws.write('\n\t');
ws.write('"weight": "15 lbs"');
ws.write('\n');
ws.write('}');

ws.end();
