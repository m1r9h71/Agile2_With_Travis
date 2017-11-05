var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../bin/www');
var expect = chai.expect;

chai.use(chaiHttp);
var _ = require('lodash');
chai.use(require('chai-things'));
var itemId;
var testEvent = {

    title : 'testTitle',
    description : 'testDesc',
    place : 'testPlace',
    startdate : 'testStart',
    finishdate : 'testFin',
    status : 'testStat'
}
describe('Event', function() {
    describe('POST /events', function(){
        it('should return confirmation message and update datastore', function(done){
            chai.request(server)
                .post('/events')
                .send(testEvent)
                .end(function(err, res){
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('message').equal('Event Added!');
                    done();
                });
        });
    });
});
