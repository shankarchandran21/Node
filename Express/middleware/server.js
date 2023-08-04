import  express  from "express";

const server = express();
const port = 5000;

const middleWare = (req,res,next)=>{
  
    if(req.url === '/'){
       next();
    }else{
        return res.status(200).send(`<h1>MiddleWare Error..........</h1>`)
    }
}

const middleWareQuery = (req,res,next)=>{
    const {company} =req.query;
    console.log(company)
    if(company){
        req.company = company;
        next();
    }else{
        res.status(400).send(`<h1>NO company in about page</h1>`)
    }
}


server.get('/', middleWare,(req, res) => {
    res.status(200).send(`<h1>HI SHANKAR </h1>`)
})

//query
server.get('/about', middleWareQuery,(req, res) => {
    res.status(200).send(`<h1>Company Name ${req.company}</h1>`)
})

const TestMidlewareOne =(req,res,next)=>{
    console.log("TestMidlewareOne")
    next()
}

const TestMidlewareTwo =(req,res,next)=>{
    console.log("TestMidlewareTwo")
    next()
}

//add Multiple Middleware
server.get('/test',[TestMidlewareOne,TestMidlewareTwo],(req, res) => {
        res.status(200).json({message:"TESTING MIDDLEWARE..........."})
})







server.listen(port,()=>console.log(`server is listening on port ${port}`));
