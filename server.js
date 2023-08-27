const express= require('express')
const app=express()
require('dotenv').config()
app.use(express.urlencoded({extended:false}))
const userRouter=require('./routers/userrouter')
const adminrouter=require('./routers/adminrouter')
const mongoose=require('mongoose')
mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`)
const session=require('express-session')






app.use(session({
    secret:process.env.SECRET_KEY,
    resave:false,
    saveUninitialized:false,
    cookie:{maxAge:1000*60*60*24*365}
}))
app.use( '/admin',adminrouter)

app.use(userRouter)
app.use(express.static('public'))
app.set('view engine','ejs')
app.listen(process.env.PORT,()=>{console.log(`Server is running on port ${process.env.PORT}`)})