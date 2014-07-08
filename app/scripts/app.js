'use strict';

/**
 * @ngdoc overview
 * @name duckDuckGoApp
 * @description
 * # duckDuckGoApp
 *
 * Main module of the application.
 */
angular
  .module('duckDuckGoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .run(function(){
    $(document).foundation();
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
