require('../../node_modules/bootstrap/dist/css/bootstrap.css' );
require('../../node_modules/font-awesome/css/font-awesome.css' );
require('../stylesheets/style.css');
require('angular');
require('angular-route');

var app = angular.module('Web App 70% Assignment', ['ngRoute']);
require('./controllers/index');


app.config(['$routeProvider', function($routeProvider) { 
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl : 'public/pages/home.ejs',
            controller  : 'mainController'
        })

        // route for the donate page
        .when('/event', {
            templateUrl : 'public/pages/event.ejs',
            controller  : 'eventController'
        })

        // route for the donations page
        .when('/events', {
            templateUrl : 'public/pages/events.ejs',
            controller  : 'eventsController'
        })

    //route for person page
        .when('/person', {
            templateUrl : 'public/pages/person.ejs',
            controller : 'personController'
        })

    //route for people page
        .when('/people', {
            templateUrl : 'public/pages/people.ejs',
            controller : 'peopleController'
        })

    //route for add person to event page
        .when('/personevent', {
            templateUrl : 'public/pages/personevent.ejs',
            controller : 'personEventController'
        });
}]);






