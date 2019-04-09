const fs = require('fs');

const rs = fs.createReadStream('./1_streams.md', {
  encoding: 'utf8',
  highWaterMark: 1
});

//the data event
rs.on('data', data => {
  console.log('chunk', data);
});
