var app = angular.module('Web App 70% Assignment', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl : 'pages/home.ejs',
            controller  : 'mainController'
        })

        // route for the donate page
        .when('/event', {
            templateUrl : 'pages/event.ejs',
            controller  : 'eventController'
        })

        // route for the donations page
        .when('/events', {
            templateUrl : 'pages/events.ejs',
            controller  : 'eventsController'
        })

    //route for person page
        .when('/person', {
            templateUrl : 'pages/person.ejs',
            controller : 'personController'
        })

    //route for people page
        .when('/people', {
            templateUrl : 'pages/people.ejs',
            controller : 'peopleController'
        })

    //route for add person to event page
        .when('/personevent', {
            templateUrl : 'pages/personevent.ejs',
            controller : 'personEventController'
        });
});






