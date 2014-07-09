'use strict';
/**
 * @ngdoc overview
 * @name jacobharasimoApp
 * @description
 * # jacobharasimoApp
 *
 * Main module of the application.
 */
angular
    .module('jacobharasimoApp', [
        'ngAnimate',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .run(function($rootScope,$location,$filter,topNav){
        $rootScope.$on('$locationChangeStart', function() {
            topNav.setActiveNav($location.path());
        });

    })
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/myWork.html',
                controller: 'MyWorkCtrl'
            })
            .when('/MyClients', {
                templateUrl: 'views/myClients.html',
                controller: 'MyClientsCtrl'
            })
            .when('/MyWork', {
                templateUrl: 'views/myWork.html',
                controller: 'MyWorkCtrl'
            })
            .when('/MyWork/:id', {
                templateUrl: 'views/project.html',
                controller: 'ProjectCtrl'
            })
            .when('/MyLanguages', {
                templateUrl: 'views/myLanguages.html',
                controller: 'MyLanguagesCtrl'
            })
            .when('/MyHistory', {
                templateUrl: 'views/myHistory.html',
                controller: 'MyHistoryCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
