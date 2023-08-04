import express from 'express'
import data from './data.js'
const app = express()
const PORT = 5000

const users= [
    {id:1,name:'shankar',age:24},
    {id:2,name:'Shannn',age:23},
    {id:3,name:'Praveena',age:20},
    {id:4,name:'Jerry',age:21},
    {id:5,name:'Ammmuuu',age:22}

]

app.use(express.json())
/* http methods(CRUD=>Create,Read,Update,Delete)
1.Get-Read
2.Post-Create
3.Put/Patch-Update
4.Delete-Delete
*/


//Get =>Getting the all the user
app.get('/api/user',(req,res)=>{
    res.status(200).json({message: 'Success',user:data})
})

//Get =>Get Single User
app.get('/user/:id',(req,res)=>{
    const{id}=req.params
    const singleProduct = data.find((item)=>item.id==id)
    res.status(200).json({message: 'Success',user:singleProduct})
})


//Post 

app.post('/api/user/create',(req,res)=>{
    if(req.body){
        res.status(200).json({message: 'Success',user:req.body})
    }else{
        res.status(200).json({message: "Something went wrong"})
    }
})

//Delete a User

app.delete('/api/user/:id',(req,res)=>{
    const { id}= req.params
    console.log(id)
    let user = data.find((item)=>item.id === id)
    if(user){
      const  newData = data.filter((item)=>item.id !== id)
        res.status(200).json({message:'success',data:newData})
    }else{
        res.status(200).json({message:`No data found in the id ${id}` })
    }
    




})

//Put 

app.put('/api/user/:id',(req,res)=>{
    const {id,name,age} = req.body
    const editUser = users.find((item)=>item.id === id)
    if(editUser){
        if(id && name && age){
            const userData = users.map((item)=>{
                if(item.id === id){
                    return {id,name,age}
                }else{
                    return item
                }
            })

            return res.status(200).json({message:"success",data:userData})
        }
    }else{
        return res.status(200).json({message:"Something went wrong"})
    }
   


})


//patch

app.patch('/api/user/:id',(req,res)=>{
    const {id}= req.params
    const {title} = req.body
    const editUser = users.find((item)=>item.id === Number(id))
    console.log(editUser)
    if(editUser){
        if(title){
            const userData = users.map((item)=>{
                if(item.id === Number(id)){
                    console.log(id)
                    return {...item,title:title+"s"}
                }else{
                    return item
                }
            })
            console.log(title)
            return res.status(200).json({message:"success",data:userData})
        }
    }else{
        return res.status(200).json({message:"Something went wrong"})
    }
   


})




app.listen(PORT,()=>console.log(`Port: ${PORT}`))