const chai =  require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);


describe(" get all macdo api rest " , function () {

    it(' la reponse retourné est le code 200', function (done) {

        chai.request('http://localhost:8085/V0')
            .get('/macdo/5')
            .end((err, res) => {
                chai.expect(res).to.have.status(200);
                chai.expect(res).to.have.header('content-type' , 'application/json; charset=utf-8');
                chai.expect(res).to.be.json;
                done();
            });

    });

})