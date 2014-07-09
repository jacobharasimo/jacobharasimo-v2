'use strict';

/**
 * @ngdoc function
 * @name jacobharasimoApp.controller:MyworkCtrl
 * @description
 * # MyWorkCtrl
 * Controller of the jacobharasimoApp
 */
angular.module('jacobharasimoApp')
  .controller('MyWorkCtrl', function ($scope,projects) {
        $scope.searchTerm="";
        $scope.filterType="technologies";
        $scope.Projects = projects.listAll(
            function(result){},
            function(error){throw new Exception(error);}
        );
        $scope.Technologies = projects.listTechnologies(
            function(result){},
            function(error){throw new Exception(error);}
        );
  });
