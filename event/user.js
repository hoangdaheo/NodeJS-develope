const EventEmitter = require('events').EventEmitter;
//! hardcode
let database = {
    users: [
        {id: '1',name: 'John',occupation: 'dev'},
        {id: '2',name: 'Henry',occupation: 'dev sep'},
        {id: '3',name: 'GG', occupation: 'trum'}
    ]
}
class userModel extends EventEmitter {
    constructor(){
        super();
    }
    saveUser(...user){
        for (let index = 0; index < user.length; index++) {
            database.users.push(user[index]);
            this.emit('saved',user[index]);
            
        }

    }
    allUsers(){
        return database.users;
    }
}
module.exports = userModel;