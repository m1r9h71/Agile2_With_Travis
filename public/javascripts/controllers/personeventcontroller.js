var app = angular.module('Web App 70% Assignment');

app.controller('eventsController', ['$scope', '$http', 'peopleController', function ($scope, $http, peopleController) {
    // create a message to display in our view
    $scope.message = 'Events Page!';
    $scope.selected = {};

    findAll();
    findPeople();
    function findAll() {
        $http.get('/events').success(function (data) {
            $scope.events = data;
            console.log(data);
        }).error(function (data) {
            console.log('Error: ' + data);
        });
    };

    function findPeople(){
        $http.get('/people').success(function (data){
            $scope.people = data;
            console.log(data);
        }).error(function (data){
            console.log('Error: ' + data);
        });
    };

    function addPersonToEvent(){
        http.post('/events/:eid/:pid')
    }
}