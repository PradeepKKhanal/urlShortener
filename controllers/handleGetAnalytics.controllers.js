
const URL=require('../models/url.model')

const handleGetAnalytics=async(req,res)=>{
    const shortId=req.params.shortId
    const result=await URL.findOne({shortId:shortId})
    if(!result){
        return res.status('404').json({success:true,message:"Could'nt find the given shortId"})
    }
    res.status(200).json({success:true,message:'The given shorId analytics',data:{
        shortUrl:{
            totalClicks:result.visitHistory.length,
            analytics:result.visitHistory
        }
    }})
}


module.exports={handleGetAnalytics}