var app = angular.module('blog', [
    'ngRoute',
    'LoginCtrl',
    'PostCtrl',
    'AuthService',
    'CrudService'
]);

app.config(function($routeProvider, $locationProvider){

    $routeProvider.when('/',{
        templateUrl:'js/templates/login.html',
        controller:'LoginController'
    });

    $routeProvider.when('/dashboard',{
        templateUrl:'js/templates/dashboard.html'
    });

});;