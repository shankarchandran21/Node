const { readFile, mkdir, existsSync, writeFile} = require("fs");
const path = require("path")

console.log("Start...")

const asyncDirectory = path.join(__dirname,"asyncText");
const filePath = path.join(asyncDirectory,"text.txt");

if(existsSync(asyncDirectory)){

 readFile('./write.txt','utf-8',(err,res)=>{
    if(err){
        console.log(`Error reading file : ${err.message}`)
        return
    }
    const firstRes = res
    readFile('./text.txt','utf-8',(err,res)=>{
        if(err){
            console.log(`Error reading file second : ${err.message}`)
            return
        }
        writeFile(filePath,`Shankar You Write Content in Async File in existing file ${firstRes} and ${res}\n`,{flag:'a'},(err,res)=>{
            if(err){
                console.log(`Error writing file ${err.message}`)
            }
            console.log(`successfully................................................................`)
         })
        
    })
 })
  

}else{
    mkdir(asyncDirectory,(err,res)=>{
        if(err){
            console.log("Error message : " + err.message)
            return
        }
        writeFile(filePath,"HI SHANKAR YOU CREATE ASYNC DIRECTORY\n",{flag:"a"},(err,res)=>{
            if(err){
                console.log(err)
                return
            }else{
                console.log("YOU CREATE DIRECTORY SUCCESSFULLY......")
            }
    })
})
}

console.log("END>>>>>>")