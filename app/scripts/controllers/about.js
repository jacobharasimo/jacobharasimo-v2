'use strict';

/**
 * @ngdoc function
 * @name duckDuckGoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the duckDuckGoApp
 */
angular.module('duckDuckGoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
