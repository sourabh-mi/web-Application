const Service=require('../models/service')

try{
exports.servicepage=async(req,res)=>{
const loginname= req.session.loginname
const record=await Service.find().sort({postedDate:-1}) 
const tservice=await Service.count()
const tpublished=await Service.count({status:'published'})
const tunpublished=await Service.count({status:'unpublished'})
res.render('admin/service.ejs',{loginname,record,tservice,tpublished,tunpublished})
}}catch(error){
  console.log(error.message)
}
 try{
exports.serviceform=(req,res)=>{
    const loginname=req.session.loginname
    res.render('admin/serviceform.ejs',{loginname})
}}catch(error){
  console.log(error.message)
}
try{
exports.serviceform=(req,res)=>{
    const loginname=req.session.loginname
    res.render('admin/serviceform.ejs',{loginname})
}}catch(error){
  console.log(error.message)
}
try{
exports.serviceadd=(req,res)=>{
  let currentdate=new Date()
    const filename=req.file.filename
    const{Stitle,Sdisc,Smd}=req.body
    const record=new Service({ title:Stitle, disc:Sdisc,moredetails:Smd,img:filename,postedDate:currentdate})
    record.save()
    console.log(record)
    res.redirect('/admin/service')
    }}catch(error){
      console.log(error.message)
  }
  try{
    exports.servicedelete=async(req,res)=>{
       const id=req.params.id
       await Service.findByIdAndDelete(id)
       res.redirect('/admin/service')
    }}catch(error){
      console.log(error.message)
  }
try{
    exports.servicestatusupdate=async(req,res)=>{
        const id=req.params.id
      const record=await Service.findById(id)
      //console.log(record)
      let newstatus=null
      if(record.status=='unpublished'){
             newstatus='published'
      }else{
        newstatus='unpublished'
      } 
      await Service.findByIdAndUpdate(id,{status:newstatus})
      res.redirect('/admin/service')
    }}catch(error){
      console.log(error.message)
  }
   try{
    exports.servicesearch=async(req,res)=>{
      const loginname=req.body.loginname  
      const{search}=req.body
      let record=await Service.find({status:search})
      const tservice=await Service.count()
const tpublished=await Service.count({status:'published'})
const tunpublished=await Service.count({status:'unpublished'})
      res.render('admin/service.ejs',{loginname,record,tservice,tpublished,tunpublished})
      //console.log(record)
   
}}catch(error){
  console.log(error.message)
}

exports.servicemore=async(req,res)=>{
  const record=await Service.findOne()
  res.render('servicemore.ejs',{record})
}