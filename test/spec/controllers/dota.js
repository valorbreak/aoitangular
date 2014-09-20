'use strict';

describe('Controller: DotaCtrl', function () {

  // load the controller's module
  beforeEach(module('dotafetchApp'));

  var DotaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DotaCtrl = $controller('DotaCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
