const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
const server = require("../app");

chai.use(chaiHttp);

describe("USER REGISTER TEST",() => {
    it("Kullanıcı kaydolmuş olmalı",(done) => {
        chai.request(server)
        .post("/register")
        .send({
            username: "testuser",
            password: "1234"
        })
        .end((err, res) => {
            res.should.have.status(200);
            done();
        });
    });
});

