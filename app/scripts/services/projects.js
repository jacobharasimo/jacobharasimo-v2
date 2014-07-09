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
            listAll:{
                method:'GET',
                isArray:true
            },
            listTechnologies:{
                method:'GET',
                isArray:true,
                transformResponse:function(data){
                    var result=[];
                    data = angular.fromJson(data);
                    if(data.length>0){
                        data.map(function(item){
                            item.Technologies.map(function(tech){
                                if(result.indexOf(tech)==-1){
                                    result.push(tech);
                                }
                            });
                        })
                    }
                    var returnValue=[];
                    result.map(function(tech){
                        returnValue.push({"Name":tech});
                    });
                    return returnValue;
                }
            }

        });
    });
