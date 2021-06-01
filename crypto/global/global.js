const fs = require('fs');
//nodeJs core, no need to import lib
//! __dirname
//! __filename
//! exports
//! module
//! require() ...etc 
//! buffer,stream 
//! process
//1: console
//console.log(global);
// data = 0;

//     if(data ===0){
//         throw new Error('Whoops!');
//     }

process.on('exit',function(){
    setTimeout(() => {
        console.log("first attempt");
    }, 3000);
    console.log("second attempt");
    fs.writeFile("hello.js","this line will not write",(err)=>{
        if (err) {
            console.log(err);
            return;
        }
        
    });
});
process.on('uncaughtException',function(err){
    console.log("uncaughtException");
    console.log(err.stack);
})
console.log("abc");
console.log(process.memoryUsage());