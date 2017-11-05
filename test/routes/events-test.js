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

    describe ('GET /events', function() {
        it('should return all the events in the array', function(done){
            chai.request(server)
            .get('/events')
                .end(function(err, res){
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.a('array');
                    var result = _.map(res.body, function(events){
                        return {_id: events._id,
                        title : events.title,
                        description : events.description,
                        place : events.place,
                        startdate : events.startdate,
                        finishdate : events.finishdate,
                        status : events.status}
                    });
                     expect(result).to.include({"_id":"59cc1782102ff512a46ea446","status":"c","finishdate":"24/10/2017","startdate":"23/10/2017","place":"IT119","description":"TEst Edit All","title":"Test Edit All"}),
                     expect(result).to.include({"_id":"59ecee77e2756213d0d08d02","status":"c","finishdate":"24/10/2017","startdate":"23/10/2017","place":"IT119","description":"Demo 30% assignment","title":"Assignment Demo"}),
                     expect(result).to.include({"_id":"59ee04247cebeb2b980f1f19","status":"c","finishdate":"24/10/2017","startdate":"23/10/2017","place":"IT119","description":"Demo 30% assignment3","title":"Assignment Demo44"});
                     done();
                });
        });
    });
});
