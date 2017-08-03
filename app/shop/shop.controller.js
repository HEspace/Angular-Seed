'use strict'

angular.module('myApp.shop')
    .service('DemoService',['$rootScope', 
    function($rootScope){

$rootScope.mavar = "hello";

    }]);