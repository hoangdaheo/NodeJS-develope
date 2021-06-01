const fs = require('fs');
//event only have one property : event emitter (have 2 method: on,emit)
//! 4 types of stream : readable, writable, duplex (r,w), transform (type of duplex,depend on input)
//! 4 events emitted : data: kich hoat khi du lieu duoc doc
//! end: kich hoat khi k con du lieu doc 
//! error,finish
let data = '';
//doc file bang stream
const readerStream = fs.createReadStream('input.txt');
readerStream.setEncoding('utf8');
readerStream.on('data',function(chunk){
    data+= chunk;
});
readerStream.on('end',function(){
    console.log(data+"Vi tri cuoi cung :)");
});
readerStream.on('error',(err)=>{
    if (err){
        console.log("File is not existed!!");
        return;
    }
})

