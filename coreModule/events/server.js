const http = require('http');
const {readFileSync} = require('fs')
const server = http.createServer()
const contentHtml = readFileSync("../html/index.html","utf-8")
const contentCss = readFileSync("../html/index.css","utf-8")
server.on('request',(req,res)=>{

        if(req.url === '/'){
            res.writeHead(200,{"content-typessss": "text/html"})
            res.write(contentHtml)
            res.end()
        }else if(req.url === "/about"){
            res.writeHead(200,{"content-type": "text/html"})
            res.write("<h1>About Page</h1>")
            res.end()
        }else if(req.url === "/index.css"){
            res.writeHead(200,{"content-type": "text/css"})
            res.write(contentCss)
            res.end()
        }else{
            res.writeHead(400,{"content-type": "text/html"})
            res.write("<h1>Error Page</h1>")
            res.end()
        }

});

server.listen(5000,()=>console.log("Successfully Running"))