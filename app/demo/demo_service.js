"use strict";

angular.module('myApp.demo')
    .service('DemoService',['$filter','config','$http','$resource', 
    function($filter, config, $http, $resource){

      /*    this.maFonctionprivee = function(){


        }  */


        this.compute = function(person){
            return 'Je m\'appelle : '+ person.monNom + ' ' + 
                   person.monPrenom + ' et j\'ai ' + 
                   person.monAge + ' ans, ce qui correspond à '+
                   $filter('yearToMonth')(person.monAge)+ ' mois et donc je suis : ------> '+
                   (person.monAge>10? 'grand':'petit');
        }

        this.logConfig = function(){
            console.log(config.apiUrl);
        
        }

    /*     this.getPosts = function(){
           var promise =  $http.get(config.apiUrl);
           console.log(promise);
        } */
            this.getPosts = function(){
          return $http.get(config.apiUrl);
            }


            this.getPostsViaResource = function() {
          return $resource(config.apiUrl).query();
      } 


    }]);

    /*    .factory ('DemoService', function(){
          this.maFonctionprivee = function(){}
            return {
                compute : function (person) {
                    return 'Je m\'appelle : '+ person.monNom + ' ' + 
                   person.monPrenom + ' et j\'ai ' + 
                   person.monAge+ ' et donc je suis : ------> '+
                   (person.monAge>10? 'grand':'petit');
        }
    }

      });  */

      
    


