'use strict';

/**
 * @ngdoc service
 * @name jacobharasimoApp.clients
 * @description
 * # clients
 * Factory in the jacobharasimoApp.
 */
angular.module('jacobharasimoApp')
  .factory('clients', function () {
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
