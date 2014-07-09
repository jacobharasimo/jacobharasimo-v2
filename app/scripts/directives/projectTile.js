'use strict';

/**
 * @ngdoc directive
 * @name jacobharasimoApp.directive:projectTile
 * @description
 * # projectTile
 */
angular.module('jacobharasimoApp')
    .directive('projectTile', function () {
        return {
            templateUrl:'/templates/projectTile.html',
            restrict: 'A',
            replace: true,
            scope:{projectTile:'='},
            controller: function Controller($scope) {

            },
            link: function postLink(scope, element, attrs) {

            }
        };
    });
