const mongoose=require('mongoose')
const {User}=require('./user.model')
const urlSchema=mongoose.Schema({
    shortId:{
        type:String,
        unique:true,
        required:true
    },
    redirectURL:{
        type:String,
        required:true
    },
    createdBy:{
        type:mongoose.Schema.Types.Object,
        ref:User,
        required:true
    },
    visitHistory:[{timestamp:{type:Number}}]
},{timestamps:true})

const URL=mongoose.model('url',urlSchema)

module.exports=URL


