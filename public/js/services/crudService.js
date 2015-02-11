var crud = angular.module('CrudService', []);

crud.factory('CRUD', function($http){
    return {
        all: function(){
            var request = $http({
                method: 'GET',
                url: 'api/posts'
            });
            return request;
        },
        create: function(){

        },
        get: function(id){

        },
        update: function(id, data){

        },
        delete: function(id){

        }
    }
});