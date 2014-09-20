'use strict';

describe('Service: redditdota', function () {

  // load the service's module
  beforeEach(module('dotafetchApp'));

  // instantiate service
  var redditdota;
  beforeEach(inject(function (_redditdota_) {
    redditdota = _redditdota_;
  }));

  it('should do something', function () {
    expect(!!redditdota).toBe(true);
  });

});
