var login = angular.module('LoginCtrl', []);

login.controller('LoginController', function($scope, $location, Login, SessionStorage){
    $scope.loginSubmit = function(){
        var auth = Login.auth($scope.loginData);
        auth.success(function(response){
            console.dir(response);
            $scope.formError = '';
            if (response.id){
                $location.path('/dashboard');
                SessionStorage.set('auth', true);
            }else{
                $scope.formError = response;
            }
        });
    };
});