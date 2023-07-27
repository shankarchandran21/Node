const http = require('http');
const {createReadStream,readFileSync}= require('fs')

const server = http.createServer((req,res)=>{
    // const content = readFileSync('./text.txt','utf-8')
    // res.end(content)

    const fileStream = createReadStream('./text.txt',{encoding:'utf-8'})
    fileStream.on('open',()=>{
        fileStream.pipe(res)
    })
    
   

})

server.listen(5000,()=>console.log('listening on port 5000'))
