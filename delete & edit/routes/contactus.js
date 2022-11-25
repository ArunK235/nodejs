const express= require ('express');

const contact=require('../controllers/contactus')
const router= express.Router();

router.get('/contactus', contact.getContactus);
router.post('/contactus',contact.postContactus);


module.exports=router;