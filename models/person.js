var mongoose = require('mongoose');

var PersonSchema = new mongoose.Schema({
    fname : String,
    lname : String,
    age : Number,
    gender : String,
    address : String

});

module.exports=mongoose.model('Person', PersonSchema);