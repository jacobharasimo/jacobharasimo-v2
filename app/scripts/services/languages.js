'use strict';

/**
 * @ngdoc service
 * @name jacobharasimoApp.languages
 * @description
 * # languages
 * Factory in the jacobharasimoApp.
 */
angular.module('jacobharasimoApp')
  .factory('languages', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
