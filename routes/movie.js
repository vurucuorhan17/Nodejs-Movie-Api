const express = require('express');
const router = express.Router();

const Movie = require("../models/Movie");
const Schema = require("mongoose").Schema;

/* GET movies listing. */
router.get('/', (req, res, next) => {
  Movie.aggregate([
    {
      $lookup:{
        from:"directors",
        localField:"director_id",
        foreignField:"_id",
        as:"director"
      }
    },
    {
      $unwind:"$director"
    }
  ])
  .then(data => res.json(data))
  .catch(err => res.json(err));
});

router.get("/top10",(req,res) => {
  Movie.find({}).limit(10).sort({imdb_score:-1})
  .then(data => res.json(data))
  .catch(err => res.json(err));
});

router.get("/between/:start_year/:end_year",(req,res) => {
  const {start_year,end_year} = req.params;
  Movie.find({
    year:{
      "$gte":parseInt(start_year),"$lte":parseInt(end_year)
    }
  })
  .then(data => res.json(data))
  .catch(err => res.json(err));
});

// Parametre olarak idsi verilen filmin bilgilerini getir.
router.get("/:movie_id",(req,res,next) => {
  Movie.findById(req.params.movie_id)
  .then(data => {
    if(!data)
    {
      next({message:"Böyle bir film bulunamadı...",code:1});
    }
    res.json(data)
  })
  .catch(err => res.json(err));
});

// POST metoduyla yeni bir film ekleme
router.post("/",(req,res) => {
  // const {title,category,country,year,imdb_score,director_id} = req.body;
  // const directorId = Schema.Types.ObjectId(director_id);
  
  const movie = new Movie(req.body);

  // const movie = new Movie({
  //   title:title,
  //   category:category,
  //   country:country,
  //   year:year,
  //   imdb_score:imdb_score,
  //   director_id:directorId
  // });

  /* movie.save((err,data) => {
    if (err) res.json(err);
    res.json(data);
  }); */

  const promise = movie.save();
  promise.then((data) => {
    res.json(data);
  }).catch(err => res.json(err));

});

// Parametre olarak idsi verilen filmi güncelle
router.put("/:movie_id",(req,res) => {
  Movie.findByIdAndUpdate(
    req.params.movie_id,
    req.body,
    {
    new:true
    })
  .then(data => res.json(data))
  .catch(err => res.json(err));
});

// 
router.delete("/:movieId",(req,res,next) => {
  Movie.findByIdAndRemove(req.params.movieId)
  .then(data => {
    if(!data)
    {
      next({message:"Silmeye çalıştığınız film bulunamadı",code:2});
    }
    res.json({status:1});
  })
  .catch(err => res.json(err));
});

module.exports = router;
