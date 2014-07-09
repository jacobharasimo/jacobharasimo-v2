'use strict';

/**
 * @ngdoc service
 * @name jacobharasimoApp.topNav
 * @description
 * # topNav
 * Factory in the jacobharasimoApp.
 */
angular.module('jacobharasimoApp')
    .factory('topNav', function ($filter) {
        var activeNav = 0;
        var navItems=[
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
        ];
        return {
            getActiveNav: function () {
                return activeNav;
            },
            setActiveNav: function (value) {
                var result = $filter('filter')(navItems, {Link: value}, true);
                if(result==null){
                    throw new Exception("Invalid nav");
                }
                activeNav = result[0].Order;
            },
            getNavItems:function(){
                return navItems;
            }
        };
    });
