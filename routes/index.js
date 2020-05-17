const express = require('express');
const router = express.Router();

const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.post("/register",(req,res) => {
  const {username,password} = req.body;
  
  bcrypt.hash(password,10).then(hash => {
    const user = new User({
      username,
      password:hash
    });
    const promise = user.save();

    promise.then(data => res.json(data))
      .catch(err => res.json(err));
  });
});

router.post("/login",(req,res) => {
  const {username,password} = req.body;

  User.findOne({
    username
  }).then(user => {
    if(!user)
    {
      res.json({
        status:{message:"Giriş Başarısız. Böyle bir kullanıcı bulunamadı."}
      });
    }
    else
    {
      bcrypt.compare(password,user.password).then(result => {
        if(!result)
        {
          res.json({
            status:{message:"Giriş Başarısız. Hatalı parola"}
          });
        }
        else
        {
          const payload = {
            username
          };
          const token = jwt.sign(payload,req.app.get("api_secret_key"),{
            expiresIn:720 // 720 dakika süresi var oturumun.
          });

          res.json({
            status:true,
            token
          });
        }
      })
      .catch();
    }
  })
  .catch();

});

module.exports = router;
