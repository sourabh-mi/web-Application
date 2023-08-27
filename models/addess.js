const mongoose=require('mongoose')

const addSchema=mongoose.Schema({
    add:'String',
    tel:Number,
    mob:Number,
    email:'String',
    insta:'String',
    In:'String',
    twit:'String',
    about:'String'
})



module.exports=mongoose.model('address',addSchema)