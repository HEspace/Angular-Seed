'use strict';

angular.module('myApp.view1', ['ngRoute'])



.controller('View1Ctrl', ['$scope','$http', function($scope, $http) {
    $scope.var ='ok';

    $scope.$watch('var', function(){

        $scope.varUpperCase = 
        $scope.var.toUpperCase();
    });


    $http.get
    ('https://jsonplaceholder.typicode.com/users').then
    (function (response){
        $scope.users = response.data;
    })

}]);