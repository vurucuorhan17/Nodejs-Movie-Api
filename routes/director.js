const express = require('express');
const router = express.Router();

const Director = require("../models/Director");


router.get('/', (req, res, next) => {
  Director.find({})
  .then(data => res.json(data))
  .catch(err => res.json(err));
});

router.get("/:directorId",(req,res) => {
    Director.findById(req.params.directorId)
    .then(data => res.json(data))
    .catch(err => res.json(err));
});


router.post("/",(req,res) => {
  const director = new Director(req.body);
  const promise = director.save();

  promise.then(data => res.json(data))
  .catch(err => res.json(err));

});

router.delete("/:directorId",(req,res,next) => {
    Director.findByIdAndRemove(req.params.directorId)
    .then(data => {
        if(!data)
        {
            next({message:"Silmeye çalıştığınız yönetmen bulunamadı",code:3});
        }
        res.json(data);
    })
    .catch(err => res.json(err));
});

router.put("/:directorId",(req,res) => {
    Director.findByIdAndUpdate(req.params.directorId,req.body,{new:true})
    .then(data => res.json(data))
    .catch(err => res.json(err));
});


module.exports = router;
