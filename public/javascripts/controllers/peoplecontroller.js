var app = angular.module('Web App 70% Assignment');

app.controller('peopleController', ['$scope', '$http', function ($scope, $http) {
    // create a message to display in our view
    $scope.message = 'Person Page!';
    $scope.selected = {};

    findAll();

    function findAll() {
        $http.get('/people').success(function (data) {
            $scope.people = data;
            console.log(data);
        }).error(function (data) {
            console.log('Error: ' + data);
        });
    }


    $scope.getTemplate = function (person) {
        if (person._id === $scope.selected._id) {
            return 'edit';
        } else {
            return 'display';
        }
    };
    $scope.reset = function () {
        $scope.selected = {};
    };
    $scope.editPerson = function (person) {
        console.log(JSON.stringify(person));
        $scope.selected = angular.copy(person);
    };


    $scope.updatePerson = function(person){
        'use strict';
        console.log(JSON.stringify(person));
        $http.put('/people/' + person._id, person).success(function (data) {
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
        if (confirm('Are you sure you want to delete this Person?')) {
            console.log('Deleting id :' + id);
        }
        $http.delete('/people/' + id).success(function (data) {
            console.log(data);
            findAll();
        }).error(function (data) {
            console.log('Error: ' + data);
        });
    };
}]);
