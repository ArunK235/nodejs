
const express = require('express');
const bodyparser= require('body-parser');

const app= express();
const path=require('path');
//const adminroutes= require('./routes/admin.js');
//const shoproutes= require('./routes/shop.js');

const sequelize= require('./util/database');
//const contactusroutes= require('./routes/contactus.js');
//const successroutes= require('./routes/success.js');
//const axios= require('axios');
const errorController=require('./controllers/error.js');

var cors = require('cors');
app.use(cors());
const User = require('./models/user');
app.set('view engine', 'ejs');
app.set('views', 'views');
 
/*db.execute('SELECT*FROM products')
.then(result =>{
    console.log(result[0],result[1]);
})
.catch(err =>{
    console.log(err);
})*/

app.use(bodyparser.json({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

const bookingAppRoutes = require('./routes/bookingApp.js');
//app.use('/admin',adminroutes);
//app.use('/admin', adminData.routes);
//app.use(shoproutes);
//app.use(contactusroutes);
//app.use(successroutes);
//app.use(errorController.get404);
app.use(bookingAppRoutes);

app.post('/user/add-user', async(req,res,next)=>{
    try{
        console.log(req.body);
        if(!req.body.phonenumber){
            throw new Error ('number is mandatory');
        }
        const name= req.body.name;
        const email= req.body.email;
    
        const data= await User.create({name:name, email:email})
        console.log(data);
        res.status(200).json({newUserDetail : data});
    }
    catch(error){
        res.status(500).json({
            error:error
        })
    }
      
})

app.get('/user/get-users', async(req, res, next)=>{
    try{
        const user = await User.findAll();
        res.status(200).json({allUsers : user});
    }
    catch(error){
        console.log(' get user is failing', JSON.stringify(error));
        res.status(500).json({error:error})
    }
})

app.delete('/user/delete-user/:id', async(req,res,next)=>{
    try{
        const uId = req.params.id;
        await User.destroy({ where : { id : uId}});
        res.status(200);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err)
    }
})

sequelize.sync().then(result =>{
    //console.log(result);
    app.listen(4000);
})
.catch(err =>{
    console.log(err);
})
