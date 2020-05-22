const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
const server = require("../app");

chai.use(chaiHttp);

let token,directorId;

describe("/api/director tests",() => {

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

    describe("GET /api/director",() => {
        it("Tüm yönetmenleri getiriyor olmalı",(done) => {
            chai.request(server)
            .get("/api/director")
            .set("x-access-token",token)
            .end((err,res) => {
                res.should.have.status(200);
                done();
            });
        });
    });

    describe("POST /api/director",() => {
        it("Yeni bir yönetmen ekliyor olmalı",(done) => {
            const director = {
                name:"Orhan Furkan",
                surname:"Vurucu",
                bio:"I'm 22 years old"
            }
            chai.request(server)
            .post("/api/director")
            .send(director)
            .set("x-access-token",token)
            .end((err,res) => {
                res.should.have.status(200);
                res.body.should.have.be.a("object");
                res.body.should.have.property("name");
                res.body.should.have.property("surname");
                res.body.should.have.property("bio");
                directorId = res.body._id;
                console.log(directorId);
                done();
            });
        });
    });

    describe("GET /api/director/:directorId",() => {
        it("Parametre olarak idsi verilen yönetmenin bilgilerini getirmeli",(done) => {
            chai.request(server)
            .get("/api/director/"+directorId)
            .set("x-access-token",token)
            .end((err,res) => {
                res.should.have.status(200);
                res.body.should.have.be.a("object");
                res.body.should.have.property("name");
                res.body.should.have.property("surname");
                res.body.should.have.property("bio");
                res.body.should.have.property("_id").eql(directorId);
                done();
            });
        });
    });

    describe("PUT /api/director/:directorId",() => {
        it("Parametre olarak idsi verilen yönetmen güncellenmeli",(done) => {
            const director = {
                name:"Orhan Furkan",
                surname:"Vurucu",
                bio:"I'm 21 years old"
            }
            chai.request(server)
            .put("/api/director/"+directorId)
            .send(director)
            .set("x-access-token",token)
            .end((err,res) => {
                res.should.have.status(200);
                res.body.should.have.be.a("object");
                res.body.should.have.property("name");
                res.body.should.have.property("surname");
                res.body.should.have.property("bio");
                done();
            });
        });
    });

    describe("DELETE /api/director/:directorId",() => {
        it("Parametre olarak idsi verilen yönetmen silinmeli",(done) => {
            chai.request(server)
            .delete("/api/director/"+directorId)
            .set("x-access-token",token)
            .end((err,res) => {
                res.should.have.status(200);
                res.body.should.have.be.a("object");
                res.body.should.have.property("name");
                res.body.should.have.property("surname");
                res.body.should.have.property("bio");
                done();
            });
        });
    });


});



