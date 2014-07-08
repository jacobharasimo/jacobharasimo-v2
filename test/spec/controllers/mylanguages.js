'use strict';

describe('Controller: MylanguagesCtrl', function () {

  // load the controller's module
  beforeEach(module('jacobharasimoApp'));

  var MylanguagesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MylanguagesCtrl = $controller('MylanguagesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
