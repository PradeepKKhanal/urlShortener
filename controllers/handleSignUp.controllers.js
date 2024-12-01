const {User}=require('../models/user.model')

const handleSignUp=async (req,res)=>{
    const {name,email,role,password}=req.body
    // console.log(name,email,password)
    if(!name || !email || !role || !password){
        return res.render('signUp',{error:'Fill all the fields'})
    }
    const user=await User.create({name,email,role,password})

    if(user){
        res.redirect('/login')
     
    }

    res.render('signUp',{error:'Internal Server error occured while signing in the user'})


}


module.exports={handleSignUp}