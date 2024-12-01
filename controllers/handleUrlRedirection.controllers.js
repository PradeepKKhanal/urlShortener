
const URL=require('../models/url.model')

const handleUrlRedirection=async(req,res)=>{
    const shortId=req.params.shortId 
    if(!shortId){
        return res.status(400).json({success:false,message:'Provide the shortId in params'})
    }
    // console.log(URL)
    const result=await URL.findOneAndUpdate({shortId:shortId},{$push:{visitHistory:{timestamp:Date.now()}}})
    if(!result){
        return res.status(400).json({success:false,message:'The given shortId doesnot exist'})
    }
    res.redirect(result.redirectURL)

}

module.exports={handleUrlRedirection}