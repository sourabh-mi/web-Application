const mongoose=require('mongoose')


const querySchema=mongoose.Schema({
email:'string',
query:'string',
status:{type:'string',default:'unread'}
})





module.exports=mongoose.model('query',querySchema)