const {createReadStream} = require('fs')

const stream = createReadStream('./text.txt',{highWaterMark:900000,encoding:'utf8'})

stream.on("data",(result)=>{
        console.log(result)
})