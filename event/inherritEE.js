const User = require('./user');
let user = new User();

user.on('saved',(u)=>{
    
        console.log(`new user saved:${u.id} - ${u.name} - ${u.occupation}`);


})
let hoang1 = {id: '4',name: 'asdadasdas', occupation: 'cc'};
let hoang2 = {id: '5',name: 'asdadasdas', occupation: 'cc'};
let hoang3 = {id: '6',name: 'asdadasdas', occupation: 'cc'};
user.saveUser(hoang1,hoang2,hoang3);

let allUsers = user.allUsers();
console.log(allUsers);

// ! Socket.io chỉ cho phép phát và lắng nghe sự kiện qua lại giữa client và server.

// !Events chỉ cho phép phát và lắng nghe sự kiện trong nội bộ server.
