const fs = require('fs');
const readable = fs.createReadStream('largeInput.txt',{
    encoding: 'utf8',
    highWaterMark: 32,
});
const writable = fs.createWriteStream('largeInputcopy.txt');
readable.on('data',(chunk)=>{
    console.log(chunk+'\n');
    writable.write(chunk);
})