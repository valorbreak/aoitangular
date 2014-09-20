'use strict';

/**
 * @ngdoc overview
 * @name dotafetchApp
 * @description
 * # dotafetchApp
 *
 * Main module of the application.
 */
angular
  .module('dotafetchApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/dota.html',
        controller: 'DotaCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/dota', {
        templateUrl: 'views/dota.html',
        controller: 'DotaCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
