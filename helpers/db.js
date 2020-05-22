const mongoose = require("mongoose");

module.exports = () => {
    mongoose.connect("mongodb://0.0.0.0:27017/node_movie_api");

    mongoose.connection.on("open",() => {
        console.log("MongoDB: Bağlandı");
    });

    mongoose.connection.on("error",() => {
        // console.log("MongoDB: Bağlanılamadı");
    });

    mongoose.Promise = global.Promise;

};