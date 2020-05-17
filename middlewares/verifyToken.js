module.exports = (req,res,next) => {
    const jwt = require("jsonwebtoken");
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    if(token)
    {
        jwt.verify(token,req.app.get("api_secret_key"),(err,decoded) => {
            if(err)
            {
                res.json({
                    status:false,
                    message:"Geçersiz token girdiniz"
                })
            }
            else
            {
                console.log(decoded) // decoded.username
                req.decode = decoded;
                next();
            }
        });
    }
    else
    {
        res.json({
            status:false,
            message:"Token bulunamadı"
        })
    }
    
};