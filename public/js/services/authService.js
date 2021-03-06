var login = angular.module('AuthService', []);

login.factory('Login', function($http){
    return{
        auth:function(credentials){
            var authUser = $http({
                method: 'POST',
                url: 'api/login/auth',
                params: credentials
            });
            return authUser;
        }
    };
});

login.factory('SessionStorage', function(){
    return{
        get:function(key){
            return sessionStorage.getItem(key);
        },
        set:function(key, val){
            return sessionStorage.setItem(key, val);
        },
        unset:function(key){
            return sessionStorage.removeItem(key);
        }
    }
});