const { JWTsecrets } = require('../constant')
const {getUserSession, verifyToken}=require('../services/sessionMangement')

const authentication=(req,res,next)=>{
    const uid=req.cookies?.uid
    // console.log(req)
    // const uid=req.headers['authorization'].split('Bearer ')[1]

    // console.log(uid)
    if(!uid){
        return res.redirect('login')
    }

    // const user=getUserSession(uid)
    const user=verifyToken(uid,JWTsecrets)
    // console.log('verify user',user)

    if(!user){
        return res.redirect('login')
    }
    req.user=user
    next()
}

module.exports={authentication}