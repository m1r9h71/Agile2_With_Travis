var events = require('../models/events');
var people = require('..models/people');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/eventsdb');

var db=mongoose.connection;
var Events=require('../models/events');
var People=require('../models/people');

db.on('error', function(err){
    console.log('connection error', err);
});
db.once('open', function(){
    console.log('connected to the database');
});