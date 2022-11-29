
const express = require('express');
const bodyparser= require('body-parser');

const app= express();
const path=require('path');
const adminroutes= require('./routes/admin.js');
const shoproutes= require('./routes/shop.js');

const sequelize= require('./util/database');
//const contactusroutes= require('./routes/contactus.js');
//const successroutes= require('./routes/success.js');

const errorController=require('./controllers/error.js');


app.set('view engine', 'ejs');
app.set('views', 'views');
 
/*db.execute('SELECT*FROM products')
.then(result =>{
    console.log(result[0],result[1]);
})
.catch(err =>{
    console.log(err);
})*/

app.use(bodyparser.urlencoded());
app.use(express.static(path.join(__dirname,'public')));



app.use('/admin',adminroutes);
//app.use('/admin', adminData.routes);
app.use(shoproutes);
//app.use(contactusroutes);
//app.use(successroutes);
app.use(errorController.get404);

sequelize.sync().then(result =>{
    //console.log(result);
    app.listen(4000);
})
.catch(err =>{
    console.log(err);
})
