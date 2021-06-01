//jshint esversion: 6
const fs = require('fs');
//event only have one property : event emitter (have 2 method: on,emit)
//! 4 types of stream : readable, writable, duplex (r,w), transform (type of duplex,depend on input)
//! 4 events emitted : data: kich hoat khi du lieu duoc doc
//! end: kich hoat khi k con du lieu doc 
//! error,finish
let data = "Nguyen Nguyen Hoang - 0949829234 - 348 Truong Chinh,Da Nang";
const writerStream = fs.createWriteStream("output.txt");
//ghi du lieu vao`
writerStream.write(data);
//danh dau cuoi file
writerStream.end();
//? writerStream.write('asdasdasdasdasdasdasda'); this line will be error because write after end

writerStream.on("finish", () =>{
    console.log("write finished");
});
writerStream.on("error",(err)=>{
    if (err){
        console.log(err);
    }
});