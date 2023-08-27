const Reg=require('../models/reg')



try{
exports.loginpage=(req,res)=>{
    res.render("admin/login.ejs",{message: " "})}
  }catch(error){
    console.log(error.message)
}
try{
    exports.logincheck=async(req,res)=>{
       const{us,pass}=req.body
       const record=await Reg.findOne({username:us})
       //console.log(record)
       if(record!==null){ if(record.password==pass){
         req.session.isAuth=true
         req.session.loginname=us
         req.session.userid=record.id

         res.redirect('/admin/dashboard')
       }else{
         res.render('admin/login.ejs',{message:"wrong password"})
       }

       }else{
         res.render('admin/login.ejs',{message:'wrong username'})
       }
      }
    }catch(error){
      console.log(error.message)
  }
        try{
      exports.dashboard=(req,res)=>{
        console.log(req.session)
        const loginname=req.session.loginname
        res.render('admin/dashboard.ejs',{loginname,message:''})
    }}catch(error){
      console.log(error.message)
  }
  try{
     exports.logout=(req,res)=>{
          req.session.destroy()
          res.redirect('/admin')
     }}catch(error){
      console.log(error.message)
  }
  try{
     exports.changepassword=async(req,res)=>{
      const{npass}=req.body
      const id=req.session.userid
      const loginname=req.session.loginname
      await Reg.findByIdAndUpdate(id,{password:npass})
      req.session.destroy
      res.render('admin/passwordchangesmessage.ejs')
      //res.render('admin/dashboard.ejs',{message:'password has been changed successfully',loginname})
     }}catch(error){
      console.log(error.message)
  }