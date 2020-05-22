const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
const server = require("../app");

chai.use(chaiHttp);

let token,movieId;

describe("/api/movie test",() => {
    before((done) => {
        chai.request(server)
        .post("/login")
        .send({username:"testuser",password:"1234"})
        .end((err,res) => {
            token = res.body.token;
            console.log(token);
            done();
        });
        
    });

    describe("GET /api/movie",() => {
        it("Tüm filmleri getirmeli",(done) => {
            chai.request(server)
            .get("/api/movie")
            .set("x-access-token",token)
            .end((err,res) => {
                res.should.have.status(200);
                res.body.should.be.a("array");
                done();
            });
        });
    });
    describe("POST /api/movie",() => {
        it("Film başarılı bir şekilde eklenmeli",(done) => {
            chai.request(server)
            .post("/api/movie")
            .send({
                title:"Test Film",
                category:"Test",
                country:"Turkey",
                year:2020,
                imdb_score:9.1,
                director_id:"5ebeb649ed5b8930ca0863ad"
            })
            .set("x-access-token",token)
            .end((err,res) => {
                res.should.have.status(200);
                res.body.should.have.be.a("object");
                res.body.should.have.property("title"),
                res.body.should.have.property("director_id"),
                res.body.should.have.property("category"),
                res.body.should.have.property("country"),
                res.body.should.have.property("year"),
                res.body.should.have.property("imdb_score"),
                movieId = res.body._id;
                done();
            });
        });
    })

    describe("/api/movie/:movieId",() => {
        it("it should be get movie by given id",(done) => {
            chai.request(server)
            .get("/api/movie/"+movieId)
            .set("x-access-token",token)
            .end((err,res) => {
                res.should.have.status(200);
                res.body.should.have.property("title"),
                res.body.should.have.property("director_id"),
                res.body.should.have.property("category"),
                res.body.should.have.property("country"),
                res.body.should.have.property("year"),
                res.body.should.have.property("imdb_score"),
                res.body.should.have.property("_id").eql(movieId),
                done();
            });
        });
    });

    describe("PUT /api/movie",() => {
        it("Film başarılı bir şekilde güncellenmeli",(done) => {
            const movie = {
                title:"Test Film 2",
                category:"Test2",
                country:"Türkiye",
                year:2019,
                imdb_score:8.7,
                director_id:"5ebeb649ed5b8930ca0863ae"
            };    
        
            chai.request(server)
            .put("/api/movie/"+movieId)
            .send(movie)
            .set("x-access-token",token)
            .end((err,res) => {
                res.should.have.status(200);
                res.body.should.have.be.a("object");
                res.body.should.have.property("title").eql(movie.title);
                res.body.should.have.property("director_id").eql(movie.director_id);
                res.body.should.have.property("category").eql(movie.category);
                res.body.should.have.property("country").eql(movie.country);
                res.body.should.have.property("year").eql(movie.year);
                res.body.should.have.property("imdb_score").eql(movie.imdb_score);
                done();
            });
        });
    })

    describe("DELETE /api/movie/:movie_id",() => {
        it("Idsi verilen filmi silmeli",(done) => {
            chai.request(server)
            .delete("/api/movie/"+movieId)
            .set("x-access-token",token)
            .end((err,res) => {
                res.should.have.status(200);
                res.body.should.have.be.a("object");
                res.body.should.have.property("status").eql(1);
                done();
            })
        });
    });

});



