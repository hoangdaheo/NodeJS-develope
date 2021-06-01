const fs = require('fs');
const os = require('os');
const file = fs.createWriteStream('largeInput.txt');
for (let i=0; i<=1e5; i++){
    file.write('hoangdaheo daheo daheo 123456');
}
file.end();
// const readStream = fs.createReadStream('largeInput.txt');
// readStream.setEncoding('utf8');

// readStream.on('data', function(chunk) {
//     console.log(chunk.length);
// });

fs.readFile("largeInput.txt","utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
  console.log(os.type());