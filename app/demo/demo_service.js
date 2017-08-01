"use strict";

angular.module('myApp.demo')
    .service('DemoService',['$filter', function($filter){

      /*    this.maFonctionprivee = function(){


        }  */

        this.compute = function(person){
            return 'Je m\'appelle : '+ person.monNom + ' ' + 
                   person.monPrenom + ' et j\'ai ' + 
                   person.monAge + ' ans, ce qui correspond à '+
                   $filter('yearToMonth')(person.monAge)+ ' mois et donc je suis : ------> '+
                   (person.monAge>10? 'grand':'petit');
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

    


