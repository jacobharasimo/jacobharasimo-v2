'use strict';

/**
 * @ngdoc function
 * @name duckDuckGoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the duckDuckGoApp
 */
angular.module('duckDuckGoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
