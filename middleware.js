
const express = require('express');
const bodyparser= require('body-parser');
const app= express();

app.use(bodyparser.urlencoded());
app.use((req, res, next)=>{
    //console.log('in the middlewear')
    next();
})
app.use('/add-product',(req, res, next)=>{
    //console.log('in the another middlewear');
    res.send('<form action="/product" method="POST">Adding product<input type="text" name="title"><br>product length<input type="text" name="title" required><button type="submit">submit</button></form>');
    
    
})
app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})
app.use('/',(req, res, next)=>{
    //console.log('in the another one  middlewear');
    res.send('<h1>hello from expressjs</h1>');
    
})
app.listen(4000);