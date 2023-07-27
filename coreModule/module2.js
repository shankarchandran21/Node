const path = require('path');
// console.log(path)

const filePath = path.join('/path/','newFolder','fileName.jsx');
// const filePath = '/home/user/documents/example.txt';


console.log(filePath)
console.log('Resolved Path:', path.resolve('folder', 'subfolder', 'file.txt'));
console.log('Resolved Path2:', path.resolve(__dirname, 'file.txt'));
console.log('Normalized Path:', path.normalize('/home/user/../documents/./file.txt'));
console.log('Directory Name:', path.dirname(filePath));
console.log('File Name:', path.basename(filePath));
console.log('File Extension:', path.extname(filePath));
console.log('Is Absolute Path:', path.isAbsolute(filePath));
console.log('Relative Path:', path.relative('/home/user', '/home/user/documents/file.txt'));
console.log('Parsed Path:', path.parse(filePath));