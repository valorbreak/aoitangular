'use strict';

/**
 * @ngdoc function
 * @name dotafetchApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dotafetchApp
 */
angular.module('dotafetchApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
