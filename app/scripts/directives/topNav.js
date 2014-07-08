'use strict';

/**
 * @ngdoc directive
 * @name jacobharasimoApp.directive:topNav
 * @description
 * # topNav
 */
angular.module('jacobharasimoApp')
    .directive('topNav', function () {
        return {
            template: null,
            restrict: 'A',
            controller: function Controller($scope) {
                $scope.topNavigation={Items:[
                    {
                        Title:'My Projects',
                        Link:'/',
                        Order:1
                    },
                    {
                        Title:'My Clients',
                        Link:'/MyClients',
                        Order:2
                    },
                    {
                        Title:'My Languages',
                        Link:'/MyLanguages',
                        Order:3
                    },
                    {
                        Title:'My History',
                        Link:'/MyHistory',
                        Order:4
                    },
                    {
                        Title:'My CV',
                        Link:'/',
                        Order:5
                    }
                ]};
                $scope.topNavigation.activeID=0;
            },
            link: function postLink(scope, element, attrs) {
                scope.navigate = function(id){
                    scope.topNavigation.activeID=id;
                }
            }
        };
    });
