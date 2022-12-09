const express= require ('express');
const path=require('path');

const productController=require('../controllers/admin');
const router= express.Router();

// /admin/add-product => GET
router.get('/add-product',productController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product',productController.postAddProduct);



router.get('/products', productController.getProducts);

router.get('/edit-product/:productId',productController.getEditProduct);

router.post('/edit-product',productController.postEditProduct);

router.post('/delete-product',productController.postDeleteProduct);

module.exports=router;