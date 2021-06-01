const fs = require('fs');
let readerStream = fs.createReadStream("input.txt");
let writerStream = fs.createWriteStream("output.txt");
//piping du lieu dau ra la du lieu dau vao cua stream khac 
readerStream.pipe(writerStream);