import express from 'express';
import path from 'path';
import data from './data.js';


let app = express();
const port = 5000
// app.use(express.static('../../coreModule/html'))


app.get('/',(req,res)=>{
    res.status(200).json(data)
})

app.get('/user',(req,res)=>{
        const userData = data.map((user)=>{
                const {id,name,prise,company} = user
                return{id,name,prise,company}
        })
        res.status(200).json(userData)
})

app.get('/user/:id',(req,res)=>{
        // console.log(req.params)
        const singleProduct = data.find((item)=>item.id === req.params.id)
        if(singleProduct){

            res.status(200).json(singleProduct)
        }else{
            res.status(404).json({success: false,message:"user not found"})
        }
        
})

//get multiple id
app.get('/user/:id/product/:productId',(req, res)=>{
        console.log(req.params)
        res.status(200).json({message:"Testing...."})
})

//query 
app.get('/product',(req, res)=>{
    //url:>http://localhost:5000/product?id=1&name=shankar
    console.log(req.query)//{ id: '1', name: 'shankar' }
    res.status(200).json({message:"Testing...."})
})

//query for company, company=caressa
app.get('/company',(req,res)=>{
   const {company,limit} = req.query
   console.log(company)
   let sortData = [...data]
   if(company){
        sortData =   sortData.filter((data)=>data.company == company)
   }
   if(limit){
        sortData = sortData.slice(0, Number(limit))
   }
   if(sortData.length<=0){
    return res.status(402).send('<h1>No Company Found!!</h1>')
       
   }

   res.status(200).json(sortData)
})



app.all('*',(req,res)=>{
    res.status(404).send(`<h1>Error Page</h1>`)
})

app.listen(port,()=>console.log("Successfully running Express>>>>>>>"))
