const multer=require('multer')


let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/upload')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})
let upload = multer({
    storage: storage,
    limits: { filesize: 1024 * 1024 * 4 }
})
//const multifiles=upload.fields({name:'file1',name:'file2'}) //for multifiles

module.exports=upload