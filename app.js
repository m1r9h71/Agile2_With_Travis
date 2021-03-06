var prod =  process.env.NODE_ENV === 'prod';

/*eslint no-unused-vars: "off" */
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var events = require('./routes/events');
var people = require('./routes/people');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
if (prod) {
    app.use(express.static(path.join(__dirname, 'dist')));
} else {
    app.use(express.static(path.join(__dirname, 'build')));
}
app.use('/public', express.static(__dirname + '/public'));
app.use('/', index);
app.use('/users', users);
//Events Routes
app.get('/events', events.findAll);
app.get('/events/:eid', events.findOne);
app.post('/events', events.addEvent);
app.delete('/events/:id', events.deleteEvent);
app.put('/events/:eid/status', events.editEventStatus);
app.put('/events/:eid', events.editEvent);
//People Routes
app.get('/people', people.findAllPeople);
app.get('/people/:pid', people.findOnePerson);
app.post('/people', people.addPerson);
app.delete('/people/:pid', people.deletePerson);
app.put('/people/:pid', people.editPerson);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
if (process.env.NODE_ENV !== 'test') {
    app.use(logger('dev'));
}

module.exports = app;
