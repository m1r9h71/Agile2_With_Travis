var events = require('../models/person');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/persondb');

var db=mongoose.connection;
var People=require('../models/person');
db.on('error', function(err){
    console.log('connection error', err);
});
db.once('open', function(){
    console.log('connected to the database');
});

//Find all people and display them
router.findAllPeople = function(req, res){
    //Return a JSON representation of our list
    People.find(function(err, person){
        if(err)
            res.send(err);

        res.json(person);
    });
};

//Find one person from the DB based on the ID entered
router.findOnePerson = function(req, res){
    //Use the Events model to find a single event
    People.find({'_id': req.params.pid}, function(err, person){
        if(err)
            res.json({message: 'Person NOT found, please review your information!'});
        else
            res.json(person);
    });
};

//Add a new person
router.addPerson = function(req, res, err){
    //Adds a new Person
    /* if(req.body.value === null || req.body.value === "" || err){
        res.json({message : "Invalid Input, Please review the information entered!"});
        res.send(err);
    }else {*/
    var person = new People();
    person.fname = req.body.fname;
    person.lname = req.body.lname;
    person.age = req.body.age;
    person.gender = req.body.gender;
    person.address = req.body.address;


    console.log('Adding person: ' + JSON.stringify(person));

    //SAve the person and check for any errors
    person.save(function (err) {
        if (err)
            res.send(err);

        res.json({message: 'Person Added!', data: person});
    });
    // }
};

//Delete a person based on the ID entered
router.deletePerson = function(req, res){
    //Delete the selected event from the id entered by the user
    People.findByIdAndRemove(req.params.pid, function(err){
        if(err)
            res.send(err);
        else
            res.json({message: 'Person Deleted!'});
    });
};

//Edit all of a persons details based on the ID entered
router.editPerson = function(req, res){
    People.findByIdAndUpdate(req.params.pid, {$set: {fname: req.body.fname, lname: req.body.lname, age: req.body.age,
        gender: req.body.gender, address: req.body.address}}, {new: true}, function (err, person){
        if (err){
            console.log(err);
        }
        else
            res.json({message: 'Person Updated!', data: person});
    });
};


module.exports = router;