'use strict';

angular.module('myApp.demo', ['ngRoute'])


.controller('DemoCtrl', ['$scope','DemoService','$q','$timeout', '$location',
function($scope, DemoService, $q, $timeout, $location) {

 //   var ctrl = this;
 //   ctrl.maVariable ='Your Life is Cool';

   // $scope.maVariable = 'Salut, on utilise le Scope';

   $scope.books = [{'id': 1, 'author':'Jack', 'title':'Moi'},
      {'id': 2, 'author':'John', 'title':'Mon ami'},
   {'id': 3, 'author':'Max', 'title':'L\'autre'}]

   $scope.books.forEach(function (b){
     b.text = b.id + '-' + b.author + '-' + b.title;
   });

    console.log($location.path());
    console.log($location.search());

    $scope.submit = function(){
    $location.path('/view1');
    }

    $scope.searchTitle = $location.search().title;
    $scope.searchAuthor = $location.search().author;


    $scope.person = {};


    $scope.$watch('person', function(){
    $scope.result = DemoService.compute($scope.person);
     }, true);

     $scope.groundZero = function(){
     return  {"background-color" : "yellow"};
     }; 

        $scope.groundOne = function(){
     return  {"background-color" : "orange"};
     }; 

     DemoService.logConfig();
     DemoService.getPosts();



    var promise = DemoService.getPosts().then(function(response){
       $scope.data = response.data;
       return'promised resolved'; 
    }, function(error){
       console.log('error');
    });

    /* promise.then(function (reponse){
    $scope.data = reponse.data;
    return $scope.data;
    
   }); */

  $scope.data2 = DemoService.getPostsViaResource();
  console.log($scope.data)
   $scope.data2.$promise.then(function (){
    console.log($scope.data2);
  });

  var defer = $q.defer();
  console.log(defer)
  defer.promise.then(function (val) {
    console.log(val)
  },function (error){
    console.log(error)
  })

  $timeout(function(){
    defer.reject('error');
  }, 2000)
  

  
  
  


}]);