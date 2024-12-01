const { v4: uuidv4 } = require('uuid');

const {User}=require('../models/user.model')
const {setUserSession, generateToken}=require('../services/sessionMangement')

const handleLogIn=async (req,res) => {
    const {email,password}=req.body 
    const user=await User.findOne({email})
    // console.log('logged in user',user)
    if(!user){
       return res.render('logIn',{error:'Please provide the correct credentials'})
    }

    // const sessionId=uuidv4()
    const sessionId=generateToken({_id:user._id,name:user.name,email:user.email,role:user.role})
    // setUserSession(sessionId,user)
    res.cookie('uid',sessionId)
    // res.json({token:sessionId})


    res.redirect('/')
}


module.exports={handleLogIn}
