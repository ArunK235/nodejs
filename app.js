const http= require('http');

const express = require('express');

const app= express();

app.use((req, res, next)=>{
    console.log('in the middlewear')
    next();
})
app.use((req, res, next)=>{
    console.log('in the another middlewear');
    res.send('<h1>hello from expressjs</h1>');
    //res.send({key1:'arun'});
})

app.listen(4000);