const jwt = require("jsonwebtoken");
``
module.exports = (req,res,next)=>{
    if(req.method === 'OPTIONS'){
        return next();
    }
    const token = req.headers.Authorization.split(' ')[1] //bcz its in the form Authorization: 'Bearer {TOKEN}'
    try{
        if(!token){
            throw new Error("This is shitty")
        }
        const decoded = jwt.verify(token,'not_meant_to_be_shared')
        req.userData = {email: decoded.email, who: decoded.who}
        next()
    }
    catch(err){
        const error = Error("Application failed")
        return next(error)
    }
}