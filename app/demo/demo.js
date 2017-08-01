'use strict';

angular.module('myApp.demo', ['ngRoute'])


.controller('DemoCtrl', ['$scope','DemoService', function($scope, DemoService) {

 //   var ctrl = this;
 //   ctrl.maVariable ='Your Life is Cool';

   // $scope.maVariable = 'Salut, on utilise le Scope';

   $scope.books = [{'author':'Jack', 'title':'Moi'},
      {'author':'John', 'title':'Mon ami'},
   {'author':'Max', 'title':'L\'autre'}]


    $scope.person = {};


    $scope.$watch('person', function(){
    $scope.result = DemoService.compute($scope.person);
     }, true);

}]);