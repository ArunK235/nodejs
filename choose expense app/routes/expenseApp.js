const express= require ('express');
const router= express.Router();
const expenseAppController = require('../controllers/expenseApp.js')

router.post('/expense/add-expensive', expenseAppController.addExpensive)

router.get('/expense/get-expensive',expenseAppController.getExpensive)

router.delete('/expense/delete-expensive/:id',expenseAppController.deleteExpensive)

module.exports=router;