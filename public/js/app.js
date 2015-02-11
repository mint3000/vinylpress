var app = angular.module('blog', [
    'ngRoute',
    'LoginCtrl',
    'PostCtrl',
    'AuthService',
    'CrudService'
]);

app.config(function($routeProvider){

    $routeProvider.when('/',{
        templateUrl:'js/templates/login.html',
        controller:'LoginController'
    });

    $routeProvider.when('/dashboard',{
        templateUrl:'js/templates/dashboard.html',
        resolve: {
            // Auth Check
            AuthUser: ['$location','SessionStorage',
                function($location, SessionStorage){
                    if (SessionStorage.get('auth') === null){
                        $location.path('/');
                    }
                }
            ]
        }
    });

});