'use strict';

/**
 * @ngdoc service
 * @name jacobharasimoApp.projects
 * @description
 * # projects
 * Factory in the jacobharasimoApp.
 */
angular.module('jacobharasimoApp')
  .factory('projects', function ($resource) {
        return $resource('data/projects.json',{},{
            list:{method:'GET',isArray:true}
        });
    });
