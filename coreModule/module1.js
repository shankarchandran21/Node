const os = require('os');
// console.log(os)

const sysInfo = os.cpus();
const time = os.uptime();
console.log(sysInfo)
console.log(time)