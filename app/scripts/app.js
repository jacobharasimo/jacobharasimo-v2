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
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
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
