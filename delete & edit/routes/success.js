const express= require('express');
const successController=require('../controllers/contactus')
const router= express.Router();


router.get('/success',successController.getSuccess);

module.exports= router;