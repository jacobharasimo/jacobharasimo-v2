'use strict';

describe('Service: topNav', function () {

  // load the service's module
  beforeEach(module('jacobharasimoApp'));

  // instantiate service
  var topNav;
  beforeEach(inject(function (_topNav_) {
    topNav = _topNav_;
  }));

  it('should do something', function () {
    expect(!!topNav).toBe(true);
  });

});
