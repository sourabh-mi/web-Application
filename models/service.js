const mongoose=require('mongoose')

const   serviceSchema=mongoose.Schema({
    img:String,
    title:String,
    disc:String,
    moredetails:String,
    postedDate:Date,
    status:{type:String,default:'unpublished'}
})



module.exports=mongoose.model('service', serviceSchema)