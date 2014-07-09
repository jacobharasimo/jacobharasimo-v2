'use strict';

describe('Directive: projectTile', function () {

  // load the directive's module
  beforeEach(module('jacobharasimoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<project-tile></project-tile>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the projectTile directive');
  }));
});
