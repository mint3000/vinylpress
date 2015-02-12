var login = angular.module('LoginCtrl', []);

login.controller('LoginController', function($scope, $location, Login, SessionStorage){

    $scope.loginSubmit = function(){
        var auth = Login.auth($scope.loginData);
        auth.success(function(response){
            console.dir(response);
            $scope.formError = '';
            if (response.id){
                SessionStorage.set('auth', true);
                SessionStorage.set('user', JSON.stringify(response));
                window.location.href = '/admin#/dashboard';
            }else{
                $scope.formError = response;
            }
        });
    };

    $scope.logout = function(){
        SessionStorage.unset('user');
        SessionStorage.unset('auth');
        window.location.href = 'api/login/destroy';
    };
});