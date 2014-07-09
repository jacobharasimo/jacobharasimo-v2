'use strict';

/**
 * @ngdoc directive
 * @name jacobharasimoApp.directive:topNav
 * @description
 * # topNav
 */
angular.module('jacobharasimoApp')
    .directive('topNav', function (topNav) {
        return {
            template: null,
            restrict: 'A',
            controller: function Controller($scope) {
                $scope.topNavigation={Items:topNav.getNavItems()};
                $scope.topNav=topNav;
            },
            link: function postLink(scope, element, attrs) {

            }
        };
    });
