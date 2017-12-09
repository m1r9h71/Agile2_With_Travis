var app = angular.module('Web App 70% Assignment');

app.controller('eventsController', ['$scope', '$http', function ($scope, $http) {
    // create a message to display in our view
    $scope.message = 'Events Page!';
    $scope.selected = {};

    findAll();

    function findAll() {
        $http.get('/events').success(function (data) {
            $scope.events = data;
            console.log(data);
        }).error(function (data) {
            console.log('Error: ' + data);
        });
    }


    $scope.getTemplate = function (event) {
        if (event._id === $scope.selected._id) {
            return 'edit';
        } else {
            return 'display';
        }
    };
    $scope.reset = function () {
        $scope.selected = {};
    };
    $scope.editEvent = function (event) {
        console.log(JSON.stringify(event));
        $scope.selected = angular.copy(event);
    };


    $scope.updateEvent = function(event){
        'use strict';
        console.log(JSON.stringify(event));
        $http.put('/events/' + event._id, event).success(function (data) {
            // $http.put('/events/' + id).success(function (data) {
            console.log(JSON.stringify(data));
            findAll();
            $scope.reset();
        }).error(function (data) {
            console.log('Error: ' + data);
            findAll();
            $scope.reset();
        });
    };
    $scope.delete    = function (id) {
        if (confirm('Are you sure you want to delete this Event?')) {
            console.log('Deleting id :' + id);
        }
        $http.delete('/events/' + id).success(function (data) {
            console.log(data);
            findAll();
        }).error(function (data) {
            console.log('Error: ' + data);
        });
    };
}]);
