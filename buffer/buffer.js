//! buffer lien ket sau sac voi stream
//! khi du lieu tai ve nhanh, tat ca se luu vao buffer (youtube)

//? tao buffer
const buffer = Buffer.from('hey!');
//? Buffer.from(array)
//? Buffer.from(arr,byteOffSet,length) offset la vi tri muon ghi
//? Buffer.from(buffer)
//? Buffer.from(str,encoding)

const buf = Buffer.alloc(10); //? khoi tao bo nho tai 0
//! or
//? const buf = Buffer.allocUnsafe(1024); gay nen ro ri bo nho

console.log(buffer[0]);
console.log(buffer); //? <Buffer hex hex hex hex>
console.log(buffer.toString());
console.log(buf.toString());

//! thay doi noi dung buffer
buf.write("hoangdaheo1");
console.log(buf.toString());

//! sao chep buffer
const buffCopy = Buffer.alloc(6);
buf.copy(buffCopy,1,3,8); // 1 = 6-1 ; 0:first i,5:last i
console.log(buffCopy.toString());

//! slicing buffer 
//?buffer tham chieu ke ca slice()
const slice = buffer.slice(1,3);
console.log(slice.toString());
buffer[2]= 111;
console.log(slice.toString());
