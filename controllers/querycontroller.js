const Query = require('../models/query')
const nodemailer = require("nodemailer");


try{
exports.queryinsert = (req, res) => {
  const { email, query } = req.body
  const record = new Query({ email: email, query: query })
  record.save()
  //console.log(record)
}}catch(error){
  console.log(error.message)
}
try{
exports.querypage = async (req, res) => {
  const loginname = req.session.loginname
  const record = await Query.find().sort({ status: -1 })
  res.render('admin/query.ejs', { loginname, record })
}}catch(error){
  console.log(error.message)
}
exports.queryform = async (req, res) => {
  const id = req.params.id
  const loginname = req.session.loginname
  const record = await Query.findById(id)
  res.render('admin/queryform.ejs', { loginname, record })
}
try{
exports.emailsend = async (req, res) => {
  const path = req.file.path
  const id = req.params.id
  const { emailto, emailfrom, subject, body } = req.body
  //console.log(req.body)
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: 'eng23742@gmail.com',
      pass: 'dosuyhentsaghaod'
    },
  });
  console.log('connected to SMPt server')
  const info = await transporter.sendMail({
    from: emailfrom, // sender address
    to: emailto, // list of receivers
    subject: subject, // Subject line
    text: body, // plain text body
    //html: "<b>Hello world?</b>", // html body
    attachments: [{
      path: path
    }]
  });
  console.log('mail send succesfully');
  await Query.findByIdAndUpdate(id, { status: 'Replied' })
  res.redirect('/admin/query')

}}catch(error){
  console.log(error.message)
}


