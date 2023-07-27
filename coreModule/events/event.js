const eventEmitter = require('events')
const customEmitter = new eventEmitter();

customEmitter.on('response',(id,userName,age)=>{
    console.log(`The username is ${userName} and user age is ${age} and user id is ${id}`);
})



customEmitter.on('userData',(id,userName,age)=>{
    console.log(`The username is ${userName} and user age is ${age} and user id is ${id}`);
})



customEmitter.emit('response',1001,"Shankar",24);
customEmitter.emit('userData',1003,"Alex",22);
