const {nanoid}=require('nanoid')



const URL=require('../models/url.model')

const handleUrlCreation=async (req,res)=>{
    // console.log(req.user)
    const body=req.body;
    if(!body.url){
        return res.status(400).json({success:false,message:'Url is required'});
    };
    const shortId=nanoid(7);
    await URL.create({
        shortId:shortId,
        redirectURL:body.url,
        createdBy:req.user?._id,
        visitHistory:[]
    })
    // return res.status(201).json({success:true,message:'Short url created successfully',data:{id:shortId}})
    res.render('urlForm',{shortId})
}

module.exports={
    handleUrlCreation
}