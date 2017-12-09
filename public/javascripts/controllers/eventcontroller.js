var app = angular.module('Web App 70% Assignment');

app.controller('eventController', ['$scope', '$location', '$http', function($scope, $location, $http) {

    $scope.formData = {};

    $scope.message = 'Add an Event!';
    $scope.title = String;
    $scope.description = String;
    $scope.place = String;
    $scope.startdate = Date.now();
    $scope.finishdate = Date.now();
    $scope.status = String;
    $scope.options = [{ status: "Open", id: 0 }, { status: "Closed", id: 1 }];
    $scope.formData.statusOptions = $scope.options[0];



    $scope.addEvent = function(){
        $scope.formData.time = $scope.formData.statusOptions.status;
        $http.post('/events', $scope.formData)
            .success(function(data) {
                $scope.events = data;
                $location.path('events/');
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
}

]);