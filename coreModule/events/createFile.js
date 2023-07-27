const {writeFileSync} = require('fs');

for(let i =1;i<=100000;i++){
    writeFileSync('./text.txt',`${i}. Hi Shankar\n`,{flag:'a'})
}