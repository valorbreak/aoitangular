'use strict';

/**
 * @ngdoc function
 * @name dotafetchApp.controller:DotaCtrl
 * @description
 * # DotaCtrl
 * Controller of the dotafetchApp
 */
angular.module('dotafetchApp')
  .controller('DotaCtrl', function ($scope, redditDota) {

    // redditDota is a service
    redditDota.getDotaFront()
      .then(function(response){
        $scope.data = response;
      });


  });
