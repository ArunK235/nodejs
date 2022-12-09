const Expense = require('../models/expense');

exports.addExpensive= async(req, res, next)=>{
    try{
        console.log(req.body);
        const chooseexpensive = req.body.chooseexpensive;
        const choosetheater = req.body.choosetheater;
        const choosemovie = req.body.choosemovie;

        const data = await Expense.create({chooseexpensive:chooseexpensive, choosetheater:choosetheater, choosemovie:choosemovie})
        console.log(data);
        res.status(200).json({newChooseExpensive : data})
    }
    catch(error){
        res.status(500).json({
            error:error
        })
    }
    

}

exports.getExpensive =  async (req, res)=>{
    try{
        console.log(req.body);
        const data2 = await Expense.findAll();
        res.status(200).json({allExpenses : data2});
    }
    catch(error){
        console.log(' get expense is failing', JSON.stringify(error));
        res.status(500).json({error:error})
    }
}

exports.deleteExpensive =  async (req, res)=>{
    try{
        const uId = req.params.id;
        await Expense.destroy({ where : { id : uId}});
        res.status(200);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err)
    }
}