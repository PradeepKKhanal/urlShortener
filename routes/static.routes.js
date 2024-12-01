const express=require('express')

const {handleStaticUrlForm}=require('../controllers/handleStaticUrlForm.controllers')
const {handleUserSignUp}=require('../controllers/handleStaticUserSignUp.controllers')
const {handleUserLogIn}=require('../controllers/handleStaticUserLogIn.controllers')
const {handleAdminPage}=require('../controllers/handleAdminPage.controllers')

const {authentication}=require('../middlewares/authentication.middleware')
const {authorize}=require('../middlewares/authorization.middleware')

const router=express.Router()


router.get('/',authentication,authorize('normal'),handleStaticUrlForm)
router.get('/admin',authentication,authorize(['admin']),handleAdminPage)

router.get('/signup',handleUserSignUp)
router.get('/login',handleUserLogIn)


module.exports=router