var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../bin/www');
var expect = chai.expect;

chai.use(chaiHttp);
var _ = require('lodash' );
chai.use(require('chai-things'));
describe('Person', function(){
    describe ('GET /people', function() {
        it('should return all the people in an array', function(done){
            chai.request(server)
                .get('/people')
                .end(function(err, res){
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.a('array');
                    //the following line has an issue, the array is being added to each time...
                   // expect(res.body.length).to.equal(8);
                    var result = _.map(res.body, function(people){
                        return {_id: people._id,
                            address : people.address,
                            gender : people.gender,
                            age : people.age,
                            lname : people.lname,
                            fname : people.fname}
                    });

                    expect(result).to.include({"_id":"59d2c6d998773510b8bebfbd","address":"Ballybricken, Waterford","gender":"male","age":46,"lname":"Hoing","fname":"Matt"});
                    expect(result).to.include({"_id":"59d2c748b4cdc81618b5d73e","address":"Ballybricken, Waterford","gender":"female","age":23,"lname":"Coughlan","fname":"Elaine"});
                    expect(result).to.include({"_id":"59d2c93039f6503004439f9e","address":"Ballybricken, Waterford","gender":"female","age":21,"lname":"Lacoste","fname":"Catherine"});
                    expect(result).to.include({"_id":"59d2c96439f6503004439f9f","address":"Ballytruckle Road, Waterford","gender":"male","age":47,"lname":"Hoing","fname":"Ian"});
                    expect(result).to.include({"_id":"59d2c99539f6503004439fa0","address":"Updated Test Data","gender":"male","age":19,"lname":"Updated Data","fname":"Updated Test"});
                    done();
                });
        });
    });

    describe ('GET /people/:pid', function() {
        it('should return one person in an array', function (done) {
            chai.request(server)
                .get('/people/59d2c6d998773510b8bebfbd')
                .end(function (err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.a('array');
                    expect(res.body.length).to.equal(1);
                    var result = _.map(res.body, function (people) {
                        return {
                            _id: people._id,
                            address: people.address,
                            gender: people.gender,
                            age: people.age,
                            lname: people.lname,
                            fname: people.fname
                        }
                    });
                    expect(result).to.include({
                        "_id": "59d2c6d998773510b8bebfbd",
                        "address": "Ballybricken, Waterford",
                        "gender": "male",
                        "age": 46,
                        "lname": "Hoing",
                        "fname": "Matt"
                    });
                    done();
                });
        });
    });
    describe('POST /people', function () {
        it('should return confirmation message and update datastore', function(done) {
            var person = {
                fname : 'Daniel',
                lname : 'Green',
                age : 40,
                gender : 'M',
                address : 'England'
            };
            chai.request(server)
                .post('/people')
                .send(person)
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('message').equal('Person Added!' ) ;
                    done();
                });
        });
    });
    describe('PUT /people/:pid', function() {
        it('should update the details of the person with the chosen id', function (done) {
            var personedit ={
                fname: 'Bernard',
                lname: 'Butler',
                age: 45,
                gender: 'M',
                address: 'London'
        };

            chai.request(server)
                .put('/people/59d2c6d998773510b8bebfbd')
                .send(personedit)
                .end(function(err, res){
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('message').equal('Person Updated!');
                    done();
                });
        });
        });
    });
