'use strict';

describe('myApp.demo module', function() {

  beforeEach(module('myApp.demo'));

  describe('view1 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var demoCtrl = $controller('DemoCtrl');
      expect(demoCtrl).toBeDefined();
    }));

  });
});