const mongoose=require('mongoose')


const bannerSchema=mongoose.Schema({
 title:String,
 disc:String,
 img: String,
 moredetails:String


})




module.exports=mongoose.model('banner',bannerSchema)