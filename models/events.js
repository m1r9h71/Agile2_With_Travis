var mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
   // eid : String,
    title : String,
    description : String,
    place : String,
    startdate : String,
    finishdate : String,
    status : String


});

module.exports=mongoose.model('Event', EventSchema);

