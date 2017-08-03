'use strict';

angular.module('myApp.shop', ['ngRoute'])

.controller('ShopCtrl', ['$scope','ShopService','$timeout',
function($scope, ShopService, $timeout) {

$scope.albums = ShopService.getPostsViaResource();

$scope.quantity = 1;

 $scope.panier = [];

  $scope.aAjouterArticle = function () {
        var objet = {}
            objet['quantite'] =$scope.quantity;
         objet['titre'] =$scope.selectedAlbums.title;
         $scope.panier.push(objet);
        console.log("Ajouter au panier");  
        }

         $scope.suprimerArticle = function (id) {
         $scope.panier.splice(id,1);
        }


        $scope.tailleDuPanier = function(){
            if ($scope.panier.length >0){
               return true
            }
            else
                return false
        }



        $scope.acheter = function(){
            $scope.showMessage = true;
             $timeout(function(){
           $scope.showMessage = false;
            }, 5000)
        scope.quantity=0;
        $scope.panier.forEach(function(element) {
            $scope.quantity +=  element.quantity;
           
        })
$scope.panier=[];




        }



}]);
