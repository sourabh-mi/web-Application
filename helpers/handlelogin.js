function handlelogin(req, res, next) {
    if (req.session.isAuth) {
        next()
    } else {
        res.redirect('/admin/')
    }
}
module.exports=handlelogin