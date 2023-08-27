const router = require('express').Router()
const Regc = require('../controllers/regcontroller')
const Bannerc = require('../controllers/bannercontroller')
const servicec = require('../controllers/servicecontroller')
const Testic = require('../controllers/testicontroller')
const Queryc = require('../controllers/querycontroller')
const addc=require('../controllers/addresscontroller')
const upload=require('../helpers/multer')
const handlelogin=require('../helpers/handlelogin')




router.get('/', Regc.loginpage)
router.post('/', Regc.logincheck)

router.get('/dashboard', Regc.dashboard)
router.get('/logout', Regc.logout)
router.post('/dashboard',Regc.changepassword)
router.get('/banner', handlelogin, Bannerc.bannerpage)
router.get('/bannerupdate/:id', handlelogin, Bannerc.bannerupdateform)
router.post('/bannerupdate/:id', upload.single('img'), Bannerc.bannerupdate)
router.get('/service', handlelogin, servicec.servicepage)
router.get('/serviceadd', handlelogin, servicec.serviceform)
router.post('/serviceadd', upload.single('img'), servicec.serviceadd)
router.get('/servicedelete/:id', handlelogin, servicec.servicedelete)
router.get('/servicestatusupdate/:id', handlelogin, servicec.servicestatusupdate)
router.post('/service', servicec.servicesearch)
router.get('/testi',handlelogin, Testic.testipage)
router.get('/testidelete/:id', handlelogin, Testic.testidelete)
router.get('/testistatusupdate/:id', handlelogin,Testic.testistatus)
router.post('/testi', Testic.testisearchstatus)
router.get('/query',handlelogin, Queryc.querypage)
router.get('/queryreply/:id',handlelogin, Queryc.queryform)
router.post('/queryreply/:id', upload.single("attachment"), Queryc.emailsend)
router.get('/add',handlelogin,addc.addpage)
router.get('/addupdate/:id',handlelogin,addc.addform)
router.post('/addupdate/:id',addc.adddupdate)








module.exports = router
