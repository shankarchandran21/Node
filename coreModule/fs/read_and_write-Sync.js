const {readFileSync,writeFileSync,mkdirSync,existsSync} = require('fs')
const path = require('path');
const read = readFileSync('./text.txt','utf-8')
console.log(read)
writeFileSync('write.txt',`Shankar is add text using Node: ${read}\n`,{flag:'a'} )



//here we create directory and text file in same time we write in that text file also

const directoryPath = path.join(__dirname, 'myNewDirectory');
const filePath = path.join(directoryPath, 'myfile.txt');
const fileContent = 'This is the content of the file.\n';
console.log(filePath)
try {
  // Create the directory
    if(existsSync(directoryPath)){
        console.log("The directory is already exists")
        writeFileSync(filePath, fileContent,{flag:'a'});
        const read = readFileSync(filePath,'utf-8')
        console.log(read)
    }else{
        mkdirSync(directoryPath);
        console.log(`Directory '${directoryPath}' created successfully.`);
        writeFileSync(filePath, fileContent,{flag:'a'});
    }

  // Create the file and write content to it
//   writeFileSync(filePath, fileContent,{flag:'a'});
  console.log(`File '${filePath}' created successfully.`);
} catch (err) {
  console.error(`Error creating directory or file: ${err.message}`);
}



