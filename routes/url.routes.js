const express=require('express')

const {handleUrlCreation}=require('../controllers/handleUrlCreation.controllers')
const {handleUrlRedirection}=require('../controllers/handleUrlRedirection.controllers')
const {handleGetAnalytics}=require('../controllers/handleGetAnalytics.controllers')

const router=express.Router()



router.route('/').post(handleUrlCreation)

router.get('/:shortId',handleUrlRedirection)
router.get('/analytics/:shortId',handleGetAnalytics)

module.exports=router