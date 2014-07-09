'use strict';

/**
 * @ngdoc directive
 * @name jacobharasimoApp.directive:searchBar
 * @description
 * # searchBar
 */
angular.module('jacobharasimoApp')
    .directive('searchBar', function () {
        return {
            templateUrl:'/templates/searchBar.html',
            restrict: 'A',
            replace: true,
            scope:{searchTerm:'=searchBar'},
            controller: function Controller($scope) {
                console.log($scope.searchTerm)
            },
            link: function postLink(scope, element, attrs) {

            }
        };
    });
