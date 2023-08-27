const router=require('express').Router()
const multer=require('multer')
const Regc=require('../controllers/regcontroller')
const Bannerc=require('../controllers/bannercontroller')
const servicec=require('../controllers/servicecontroller')
const Queryc=require('../controllers/querycontroller')
 const banner=require('../models/banner')
 const Service=require('../models/service')
 const testi=require('../models/testi')
 const Address=require('../models/addess')
 const Testi=require('../controllers/testicontroller')
 const addc=require('../controllers/addresscontroller')



 let storage=multer.diskStorage({destination:function(req,file,cb){
    cb(null,'./public/upload')
        },
        filename:function(req,file,cb){
            cb(null, Date.now()+file.originalname)
        }
    
    })
    let upload=multer({
        storage:storage,
        limits:{filesize:1024*1024*4}
    })

router.get('/',async(req,res)=>{

    const bannerrecord=await banner.findOne()
    const serviceRecord=await Service.find({status:'published'})
    const testirecord=await testi.find({status:'published'})
    const addrecord=await Address.findOne()
    res.render('index.ejs',{bannerrecord,serviceRecord,testirecord,addrecord})
})
router.get('/banner',Bannerc.bannerdetails)
router.get('/testi',Testi.testiform)
router.post('/testi',upload.single('img'),Testi.add)
router.post('/',Queryc.queryinsert)
router.get('/serviceMoreBTN',servicec.servicemore)


module.exports=router
