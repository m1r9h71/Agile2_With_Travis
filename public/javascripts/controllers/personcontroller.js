var app = angular.module('Web App 70% Assignment');

app.controller('personController', ['$scope', '$location', '$http', function($scope, $location, $http) {

    $scope.formData = {};

    $scope.message = 'Add a Person!';
    $scope.fname = String;
    $scope.lname = String;
    $scope.option = [{ ages: 16, id: 0 }, { ages: 17, id: 1 }, { ages: 18, id: 2}, { ages: 19, id: 3 },
        { ages: 20, id: 4 }, { ages: 21, id: 5 }, { ages: 22, id: 6 }, { ages: 23, id: 7 }, { ages: 24, id: 8 },
        { ages: 25, id: 9 }, { ages: 26, id: 10 }, { ages: 27, id: 11 }, { ages: 28, id: 12 }, { ages: 29, id: 13 },
        { ages: 30, id: 14 }, { ages: 31, id: 15 }, { ages: 32, id: 16 }, { ages: 33, id: 17 }, { ages: 34, id: 18 }, { ages: 35, id: 19 },
        { ages: 36, id: 20 }, { ages: 37, id: 21 }, { ages: 38, id: 22 }, { ages: 39, id: 23 }, { ages: 40, id: 24 }, { ages: 41, id: 25 },
        { ages: 42, id: 26 }, { ages: 43, id: 27 }, { ages: 44, id: 28 }, { ages: 45, id: 29 }, { ages: 46, id: 30 }, { ages: 47, id: 31 },
        { ages: 48, id: 32 }, { ages: 49, id: 33 }, { ages: 50, id: 34 }];
    $scope.formData.ageOptions = $scope.option[0];
    $scope.options = [{genders: 'Female', id:0}, {genders: 'Male', id:1}];
    $scope.formData.genderOptions = $scope.options[0];
    $scope.address = String;


    $scope.addPerson = function(){
        $scope.formData.age = $scope.formData.ageOptions.ages;
        $scope.formData.gender = $scope.formData.genderOptions.genders;
        $http.post('/people', $scope.formData)
            .success(function(data) {
                $scope.people = data;
                $location.path('people/');
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
}

]);