var crud = angular.module('CrudService', []);

crud.factory('CRUD', function($http){
    return {
        all: function(action){
            var request = $http({
                method: 'GET',
                url: 'api/' + action
            });
            return request;
        },
        create: function(action, data){
            var request = $http({
                method: 'POST',
                url: 'api/' + action,
                params: data
            });
            return request;
        },
        get: function(action, id){
            return $http.get('api/' + action + '/' + id);
        },
        update: function(action, id, data){
            var request = $http({
                method: 'PUT',
                url: 'api/' + action + '/' + id,
                params: data
            });
            return request;
        },
        delete: function(action, id){
            return $http.delete('api/' + action + '/' + id);
        }
    }
});