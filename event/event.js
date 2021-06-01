//! hướng sự kiện: event-driven "lắng nghe sự kiện + gán các hành động để chạy khi sự kiện xảy ra"
//! event có thể tự định nghĩa sự kiện , phát ra sự kiện trong server, k phải dựa trên người dùng như js (onClick...)
//! node chỉ chạy server, khởi tạo các biến, khai báo func và chờ sự kiện xảy ra
//! đã là sự kiện thì phải có "sự kiện" và "lắng nghe"
//jshint esversion:6

const events = require('events');
//! create an instance of events (events only have 1 props is : EventEmitter)
let EventEmitter = new events.EventEmitter();
//! visual attempt : cat with ringbell action
let ringBell = (data=1) => {
    console.log("ring ring ring...");
    console.log(data);
};
//! listenner 

//! EventEmitter.once("catRun",ringBell); only one time run
EventEmitter.on("catRun",ringBell);
//! emitter

for (let i = 0; i < 100;i++){
    EventEmitter.emit("catRun",i);
}