// const express = require('express');
import express from 'express'
let app = express();
const port = 5000;

//app.post()
//app.put()
//app.delete()
//app.use()=>adding middleware into application

app.get('/', (req, res) => {
    res.status(200).send("<h1>Hiiiiii Shankar!!!! </h1>")
})

app.get('/about', (req, res) => {
    res.status(200).send("<h1>About Page</h1>")
})

app.get('/user', (req, res) => {
    res.status(200).send("<h1>User Page</h1>")
})

app.get('*', (req, res) => {
    res.status(400).json({message:"Page not found"})
})

app.listen(port,()=>console.log('listening on port ' + port))