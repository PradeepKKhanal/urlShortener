
const URL=require('../models/url.model')

const handleAdminPage=async (req,res,next)=>{
    // console.log(URL)
    const urls=await URL.find({})
    // console.log(urls)
    res.render('admin',{urls})
}

module.exports={
    handleAdminPage
}