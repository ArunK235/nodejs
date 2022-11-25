
const express = require('express');
const bodyparser= require('body-parser');

const app= express();
const path=require('path');
const adminroutes= require('./routes/admin.js');
const shoproutes= require('./routes/shop.js');
//const contactusroutes= require('./routes/contactus.js');
//const successroutes= require('./routes/success.js');

const errorController=require('./controllers/error.js');


app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(bodyparser.urlencoded());
app.use(express.static(path.join(__dirname,'public')));



app.use('/admin',adminroutes);
//app.use('/admin', adminData.routes);
app.use(shoproutes);
//app.use(contactusroutes);
//app.use(successroutes);


app.use(errorController.get404);
app.listen(4000);