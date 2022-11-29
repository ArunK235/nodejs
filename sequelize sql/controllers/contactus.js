const path=require('path');
const rootdir=require('../util/path');

exports.getContactus=(req, res, next)=>{
    res.sendFile(path.join(rootdir,"views","contactus.html"));
};

exports.postContactus=(req,res,next)=>{
    //console.log(req.body);
    res.redirect('/success');
};

exports.getSuccess=(req, res, next)=>{
    
    res.sendFile(path.join(rootdir,'views','success.html'));
    
};