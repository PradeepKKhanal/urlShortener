const URL=require('../models/url.model')
const {mongoose}=require('mongoose')
const handleStaticUrlForm=async(req,res)=>{
    // console.log('user',req.user)
    const id= new mongoose.Types.ObjectId(req.user._id)
    const urls=await URL.find({createdBy:id})
    res.render('urlForm',{urls})
}

module.exports={
    handleStaticUrlForm
}