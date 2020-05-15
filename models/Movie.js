const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    title:{
        type:String,
        required:[true,"`{PATH}` alanı zorunludur"],
        maxlength:[20,"`{PATH}` alanı ({VALUE}) 20 karakterden büyük olamaz"],
        minlength:[2,"`{PATH}` alanı ({VALUE}) 2 karakterden küçük olamaz"]
    },
    category:{
        type:String,
        maxlength:[15,"`{PATH}` alanı ({VALUE}) 20 karakterden büyük olamaz"],
        minlength:[2,"`{PATH}` alanı ({VALUE}) 2 karakterden küçük olamaz"]
    },
    country:{
        type:String,
        maxlength:[15,"`{PATH}` alanı ({VALUE}) 20 karakterden büyük olamaz"],
        minlength:[2,"`{PATH}` alanı ({VALUE}) 2 karakterden küçük olamaz"]
    },
    year:{
        type:Number,
        max:2040,
        min:1900
    },
    imdb_score:{
        type:Number,
        max:10,
        min:0
    },
    date:{
        type:Date,
        default:Date.now()
    },
    director_id: {
        type:Schema.Types.ObjectId,
        ref:"directors"
    },
});

module.exports = mongoose.model("movies",MovieSchema);