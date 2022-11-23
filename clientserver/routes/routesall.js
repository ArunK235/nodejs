
const express = require('express');
const bodyparser= require('body-parser');
const app= express();


const adminroutes= require('./routes/admin.js');
const shoproutes= require('./routes/shop.js');

app.use(bodyparser.urlencoded());

app.use('/admin',adminroutes);
app.use(shoproutes);

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>');
});
app.listen(4000);

const express= require ('express');
const router= express.Router();

router.get('/add-product',(req, res, next)=>{
    res.send('<form action="/admin/add-product" method="POST">Adding product<input type="text" name="title"><br>product length<input type="text" name="title" required><button type="submit">submit</button></form>'); 
})
router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})

module.exports=router;

const express= require('express');
const routes= express.Router();

routes.get('/',(req, res, next)=>{
    //console.log('in the another one  middlewear');
    res.send('<h1>hello from expressjs</h1>');
    
})
module.exports= routes;