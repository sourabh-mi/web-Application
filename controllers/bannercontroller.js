const Banner=require('../models/banner')



exports.bannerpage=async(req,res)=>{
    try{
    const loginname=req.session.loginname
    const record=await Banner.findOne()
    //console.log(record)
    res.render('admin/bannerpage.ejs',{loginname,record})
    }catch(error){
        console.log(error.message)
    }
}
exports.bannerupdateform=async(req,res)=>{
    try{
    const id=req.params.id
    const record=await Banner.findById(id)
const loginname=req.session.loginname
    res.render('admin/bannerform.ejs',{loginname,record})
    //console.log(req.session)
    }catch(error){
        console.log(error.message)
    }
}
      
exports.bannerupdate=async(req,res)=>{
    try{
    const id=req.params.id
    const{BT,BD,BM}=req.body
    //console.log(req.file)
    if(req.file){
    const filename=req.file.filename
    await Banner.findByIdAndUpdate(id,{title:BT,disc:BD, moredetails:BM,img:filename})
}else{
    await Banner.findByIdAndUpdate(id,{title:BT,disc:BD, moredetails:BM,})
}
}catch(error){
    console.log(error.message)
}
res.redirect('/admin/banner')
}
try{
exports.bannerdetails=async(req,res)=>{
    const record=await Banner.findOne()
    res.render('banner.ejs',{record})
}}catch(error){
    console.log(error.message)
}


