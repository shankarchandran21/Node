const http = require('http');
const {readFile} = require('fs')
const server = http.createServer()


 readFile("../html/index.html","utf-8",(err,res)=>{
    if(err){
        console.log(`Error: ${err.message}`)
    }
    let htmlContent = res
    readFile("../html/index.css","utf-8",(err,res)=>{
        if(err){
            console.log(`Error: ${err.message}`)
        }
        serverFunc(htmlContent,res)
    })
})


function serverFunc(htmlContent,cssContent) {
    server.on('request',(req,res)=>{

        if(req.url === '/'){
            res.writeHead(200,{"content-typessss": "text/html"})
            res.write(htmlContent)
            res.end()
        }else if(req.url === "/about"){
            res.writeHead(200,{"content-type": "text/html"})
            res.write("<h1>About Page</h1>")
            res.end()
        }else if(req.url === "/index.css"){
            res.writeHead(200,{"content-type": "text/css"})
            res.write(cssContent)
            res.end()
        }else{
            res.writeHead(400,{"content-type": "text/html"})
            res.write("<h1>Error Page</h1>")
            res.end()
        }

});
}

server.listen(5000,()=>console.log("Successfully Running"))