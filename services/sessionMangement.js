

// const userSession=new Map()


// function setUserSession(id,user){
//     userSession.set(id,user)
// }

// function getUserSession(id){
//     return userSession.get(id)
// }

// module.exports={
//     setUserSession,
//     getUserSession
// }


const jwt=require('jsonwebtoken')
const {JWTsecrets}=require('../constant')

function generateToken(user){
    // console.log(jwt)
    return jwt.sign(user,JWTsecrets)
}

function verifyToken(token,secret){
    return jwt.verify(token,secret)
}

module.exports={
    generateToken,
    verifyToken
}