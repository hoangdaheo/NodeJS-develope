//step1 : import crypto
const crypto =  require('crypto-js');
data = "123456789";
secret = "hoangdaheo";
//step2 : encrypt
var cryptoMessage = crypto.AES.encrypt(data,secret).toString();
//step3: decrypt
var bytes = crypto.AES.decrypt(cryptoMessage,secret);
var origin = bytes.toString(crypto.enc.Utf8);
console.log(origin);
console.log(cryptoMessage);