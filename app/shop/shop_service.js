"use strict";

angular.module('myApp.shop')
    .service('ShopService',['config','$resource', 
    function(config, $resource){

         
            
            this.getPostsViaResource = function() {
          return $resource(config.apiUrl).query();
      } 

             }]);