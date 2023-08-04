import express from 'express';
const app = express();
const PORT = 5000

const middleWareOne = (req,res,next)=>{
    console.log('Middleware One..... ')
    next();
}

const middleWareTwo = (req,res,next)=>{
    console.log('Middleware Two..... ')
    next();
}


// app.use(middleWareOne)//it will apply to every route

//add multiple middleware
app.use([middleWareOne,middleWareTwo])
app.get('/', (req, res) =>{
    res.status(200).send(`<h1>Home Page.........</h1>`)
})

app.get('/about', (req, res) =>{

    res.status(200).send(`<h1>About Page.........</h1>`)

})

app.get('/user', (req, res) =>{

    res.status(200).send(`<h1>User Page.........</h1>`)
})







app.listen(PORT,()=>console.log('middleware listening on port 5000'))