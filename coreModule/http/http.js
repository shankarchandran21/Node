const http = require('http');


const server = http.createServer((req,res)=>{
        if(req.url === '/'){
            res.end('<h1>Welcome Shankar</h1>')
        }
        if(req.url === '/user'){
            res.end('<h1>HI SHANKAR IT USER PAGE</h1>')
        }
})

server.listen(5000,()=>console.log("Server listening on port 5000........"))