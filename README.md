# Assignment 1 - API testing and Source Control.

Name: ... Matt Hoing 20064457

## Overview.

...... The project is an event management system. The admin can create, edit, list all, list one and delete both events and people. Status can be both open or closed. Open status
events mean that although a set list of people can be invited, anyone can attend if they turn upi at the door. Closed events mean that once the guest list is created no other people
will be allowed to attend. The assignment is based on the 30% assignment of David Drohan's Web Applications module, with an added people table. It is missing the endpoints for
adding people to the events as this will all be added for the 70% Web Applications assignment.

## API endpoints.
 . . . . . List the API's endpoints and state the purpose of each . . . . 
 e.g.
//Event Routes
 app.get('/events', events.findAll); List all events
 app.get('/events/:eid', events.findOne); List one event based on the id
 app.post('/events', events.addEvent); Add a new event
 app.delete('/events/:id', events.deleteEvent); Delets an event based on the id
 app.put('/events/:eid', events.editEvent); Edit event based on the id
 //People Routes
 app.get('/people', people.findAllPeople);List all people
 app.get('/people/:pid', people.findOnePerson);List one person
 app.post('/people', people.addPerson); Add a new person
 app.delete('/people/:pid', people.deletePerson); Delete a Person
 app.put('/people/:pid', people.editPerson); Edit a person


## Data storage.
The Assignment has a MongoDB database called persondb and eventsdb
PersonSchema = new mongoose.Schema({
    fname : String,
    lname : String,
    age : Number,
    gender : String,
    address : String

});

var EventSchema = new mongoose.Schema({
   // eid : String,
    title : String,
    description : String,
    place : String,
    startdate : String,
    finishdate : String,
    status : String


});

## Sample Test execution.
Matt_@DESKTOP-JL0CEJ8 MINGW64 ~/Documents/4-WIT_SSD_YEAR_4_SEMESTER_ONE/2-Agile_Software_Practice/Agile Assignment/Agile Testing Assignment/test/routes (master)
$ npm test

> assignment-30@0.0.0 test C:\Users\Matt_\Documents\4-WIT_SSD_YEAR_4_SEMESTER_ONE\2-Agile_Software_Practice\Agile Assignment\Agile Testing Assignment
> set NODE_ENV=test && mocha test/routes/person-test.js mocha test/routes/events-test.js


    POST /people
connected to the database
connected to the database
Adding person: {"address":"TestCity","gender":"F","age":100,"lname":"TestLName","fname":"TestFName","_id":"59ff4ed3f972dd1e24def8bd"}
(node:7716) DeprecationWarning: Mongoose: mpromise (mongoose's default promise library) is deprecated, plug in your own promise library instead: http://mongoosejs.com/docs/promises.html
POST /people 200 44.288 ms - 161
      √ should return confirmation message and update datastore (77ms)
    GET /people
GET /people 200 28.668 ms - 6376
      √ should return all the people in an array (44ms)
    GET /people/:pid
GET /people/undefined 200 5.583 ms - 63
      √ should return one person in an array
    PUT /people/:pid
PUT /people/59d2c6d998773510b8bebfbd 200 8.638 ms - 41
      √ should update the details of the person with the chosen id
    DELETE /people/:pid
DELETE /people/undefined 200 1.525 ms - 198
      √ should DELETE person with the chosen id

  Event
    POST /events
Adding event: {"status":"testStat","finishdate":"testFin","startdate":"testStart","place":"testPlace","description":"testDesc","title":"testTitle","_id":"59ff4ed4f972dd1e24def8be"}
POST /events 200 2.963 ms - 208
      √ should return confirmation message and update datastore
    GET /events
GET /events 200 3.477 ms - 1081
      √ should return all the events in the array
    GET /events/:eid
GET /events/undefined 200 1.299 ms - 62
      √ should return one event in an array
    PUT /events/:eid
PUT /events/59cc1782102ff512a46ea446 200 2.869 ms - 217
      √ should update the details of the event with the chosen id
    DELETE /events/:eid
DELETE /events/undefined 200 1.322 ms - 197
      √ should DELETE event with the chosen id


  10 passing (223ms)



[ Markdown Tip: By indenting the above listing, GitHub will display it in a 'box' and preserve any formatting.]

## Extra features.
. . . . Briefly state and extra features of your testing that you feel should be high-lighted . . . . .
