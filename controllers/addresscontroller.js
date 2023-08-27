const Address = require('../models/addess')


try{
exports.addpage = async (req, res) => {
    const loginname = req.session.loginname
    const record = await Address.findOne()
    res.render('admin/addpage.ejs', { loginname, record })
}}catch(error){
    console.log(error.message)
}
try{
exports.addform = async (req, res) => {
    const id = req.params.id
    const loginname = req.session.loginname
    const record = await Address.findById(id)
    res.render('admin/addupdateform.ejs', { loginname, record })
}}catch(error){
    console.log(error.message)
}
try{
exports.adddupdate = async (req, res) => {
const { add, tel, mob, email, insta, In, twit, about } = req.body
const id = req.params.id
await Address.findByIdAndUpdate(id, { add: add, tel: tel, mob: mob, email: email, insta: insta, In: In, twit: twit, about: about })
 res.redirect('/admin/add')
}  }catch(error){
    console.log(error.message)
}