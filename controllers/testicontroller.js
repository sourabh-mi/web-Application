const Testi=require('../models/testi')



exports.testiform=(req,res)=>{
    res.render('testi.ejs')
}

try{
exports.add=(req,res)=>{
    let currentDate=new Date()
    const{feed,cn}=req.body
    if(req.file){
 const filename=req.file.filename
 var record= new Testi({quotes:feed,name:cn,postedDate:currentDate,img:filename})

 console.log(record)
    }else{
        const filename='OIP.jpeg'
        var record= new Testi({quotes:feed,name:cn,postedDate:currentDate,img:filename})
    }

    record.save()
} 
}catch(error){
    console.log(error.message)
}

try{
exports.testipage=async(req,res)=>{
    const loginname=req.session.loginname
    const testicount=await Testi.count()
    const publishedcount=await Testi.count({status:'published'})
    const unpublishedcount=await Testi.count({status:'unpublished'})

    const record= await Testi.find()
    res.render('admin/testi.ejs',{loginname,record, testicount, publishedcount, unpublishedcount})
}}catch(error){
    console.log(error.message)
}
try{
exports.testidelete=async(req,res)=>{
    const id=req.params.id
    await Testi.findByIdAndDelete(id)
    res.redirect('/admin/testi')
}}catch(error){
    console.log(error.message)
}
try{    
exports.testistatus=async(req,res)=>{
    const id=req.params.id
    const record=await Testi.findById(id)
    //console.log(record)
    let newstatus=null
    if(record.status=='unpublished'){
        newstatus='published'
    }else{
        newstatus='unpublished'
    }
    await Testi.findByIdAndUpdate(id,{status:newstatus})
    res.redirect('/admin/testi')
}}catch(error){
    console.log(error.message)
}
try{
exports.testisearchstatus=async(req,res)=>{
    const{search}=req.body
    const loginname=req.session.loginname
    const testicount=await Testi.count()
    const publishedcount=await Testi.count({status:'published'})
    const unpublishedcount=await Testi.count({status:'unpublished'})
    const record= await Testi.find({status:search})
    res.render('admin/testi.ejs',{loginname,record, testicount, publishedcount, unpublishedcount})
}}catch(error){
    console.log(error.message)
}



