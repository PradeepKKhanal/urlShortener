const express=require('express')

const {handleSignUp}=require('../controllers/handleSignUp.controllers')
const {handleLogIn}=require('../controllers/handleLogIn.controllers')

const router=express.Router()


router.post('/signUp',handleSignUp)
router.post('/logIn',handleLogIn)

module.exports=router