var events = require('../models/events');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/eventsdb');

var db=mongoose.connection;
var Events=require('../models/events');

db.on('error', function(err){
    console.log('connection error', err);
});
db.once('open', function(){
    console.log('connected to the database');
});

router.findAll = function(req, res){
    //Return a JSON representation of our list
    Events.find(function(err, events){
        if(err)
            res.send(err);

        res.json(events);
    });
}

router.findOne = function(req, res){
   //Use the Events model to find a single event
    if (!req.params){
        return res.status(400).json({message: 'no information entered'});
    }/*if(!req.params.id || id.NaN(req.params._id)){
        return res.status(400).send({message: 'id must be a number'});
    }*/
    Events.find({"_id": req.params.eid}, function(err, event){
        if(err)
            res.json({message: "Event NOT found, please review your information!"});
        else
            res.json(event);
    });
}

router.addEvent = function(req, res){
    //Adds a new Event
var event = new Events();
//event.eid=req.body.eid;
event.title=req.body.title;
event.description=req.body.description;
event.place=req.body.place;
event.startdate=req.body.startdate;
event.finishdate=req.body.finishdate;
event.status=req.body.status;

console.log('Adding event: ' +JSON.stringify(event));

//SAve the event and check for any errors
    event.save(function(err){
        if(err)
            res.send(err);

        res.json({message: 'Event Added!', data: event});
    });

}

router.deleteEvent = function(req, res){
    //Delete the selected event from the id entered by the user
   Events.findByIdAndRemove(req.params.id, function(err){
       if(err)
           res.send(err);
       else
           res.json({message: "Event Deleted!"});
   });
}


router.editEventStatus = function(req, res){
    Events.findByIdAndUpdate(req.params.eid, {$set: {status: req.body.status}}, {new: true}, function (err, event){
        if (err){
            console.log(err);
        }
        else
            res.json({message: 'Event Status Updated!', data: event});
    });
}

router.editEvent = function(req, res){
    Events.findByIdAndUpdate(req.params.eid, {$set: {title: req.body.title, description: req.body.description, place: req.body.place,
        startdate: req.body.startdate, finishdate: req.body.finishdate, status: req.body.status}}, {new: true}, function (err, event){
        if (err){
            console.log(err);
        }
        else
            res.json({message: 'Event Updated!', data: event});
    });
}

//{"_id":0,"status":"c","finishdate":"27/09/2017","startdate":"27/09/2017","place":"My Office","description":"Giving myself a migraine trying to get a bloody edit to work!!!","title":"NOT AGAIN"}

//{"_id":0,"title":"NOT AGAIN", "description":"Giving myself a migraine trying to get a bloody edit to work!!!", "place":"My Office", "startdate":"27/09/2017", "finishdate":"27/09/2017", "status":"c"}

module.exports = router;