const express= require ('express');
const path=require('path');

const productController=require('../controllers/admin');
const router= express.Router();

/*router.get('/add-product',(req, res, next)=>{
    res.sendFile(path.join(rootdir,"views","add-product.html"));
})
router.post('/add-product',(req,res,next)=>{
    //console.log(req.body);
    res.redirect('/');
})


module.exports=router;*/



// /admin/add-product => GET
router.get('/add-product',productController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product',productController.postAddProduct);

router.get('/products', productController.getProducts);

module.exports=router;