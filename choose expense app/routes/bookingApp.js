const express= require ('express');
const router= express.Router();
const bookingAppController= require('../controllers/bookingApp');

router.post('/user/add-user', bookingAppController.postAddUser )

router.get('/user/get-users', bookingAppController.getUser )

router.delete('/user/delete-user/:id', bookingAppController.deleteUser);

module.exports=router;