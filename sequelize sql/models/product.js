const Sequelize= require('sequelize');
const sequelize = require('../util/database');
const Product = sequelize.define('product',{
  id:{
    type: Sequelize.INTEGER,
    allowNull : false,
    autoIncrement: true,
    primaryKey : true
  },
  title : Sequelize.STRING,
  price: {
    type: Sequelize.DOUBLE,
    autoNull : false,
  },
  imageUrl:{
    type: Sequelize.STRING,
    autoNull: false
  },
  description:{
    type: Sequelize.STRING,
    autoNull : false
  }
});

module.exports=Product;