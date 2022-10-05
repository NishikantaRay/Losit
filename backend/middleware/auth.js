const jwt = require('jsonwebtoken');
const secretKey = "eeefdfdg";

const auth = async(req,res,next)=>{
    if(req.header("x-auth-token")){
        let token = req.header("x-auth-token");
        try{
            data = await jwt.verify(token,secretKey);
            console.log("Token Valid\n"+data);
            next();
        }catch(err){
            res.status(401).json({
                message : "Unauthorized Request. Bad token",
                error:true
            })
        }
    }else{
        res.status(401).json({
            message : "Unauthorized Request. Token missing",
            error:true
        });
    }
}

module.exports = auth;