
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
//const User = require('./models/user');

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
const expenseAppRoutes = require('./routes/expenseApp.js');
const { rmSync } = require('fs');
const Expense = require('./models/expense');
//app.use('/admin',adminroutes);
//app.use('/admin', adminData.routes);
//app.use(shoproutes);
//app.use(contactusroutes);
//app.use(successroutes);
//app.use(errorController.get404);
app.use( '/user',bookingAppRoutes);
app.use( expenseAppRoutes);



sequelize.sync().then(result =>{
    //console.log(result);
    app.listen(4000);
})
.catch(err =>{
    console.log(err);
})
