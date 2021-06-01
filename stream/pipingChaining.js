const fs = require('fs');
const zlib = require('zlib');
//nen file
const gzip = zlib.createGzip();

const readStream = fs.createReadStream('input.txt','utf8');
const writeStream = fs.createWriteStream('output.txt.gz');
readStream.pipe(gzip).pipe(writeStream);