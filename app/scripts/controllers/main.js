'use strict';

/**
 * @ngdoc function
 * @name dotafetchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dotafetchApp
 */
angular.module('dotafetchApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
