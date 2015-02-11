var app = angular.module('blog', [
    'ngRoute',
    'LoginCtrl',
    'PostCtrl',
    'EditPostCtrl',
    'AuthService',
    'CrudService',
    'CommentService',
    'DashboardDirective'
]);

app.config(function($routeProvider){

    $routeProvider.when('/',{
        templateUrl:'js/templates/login.html',
        controller:'LoginController',
        resolve: {
            /**
             * Auth Check
             */
            AuthUser: ['$location','SessionStorage',
                function($location, SessionStorage){
                    if (SessionStorage.get('auth') !== null){
                        $location.path('/dashboard');
                    }
                }
            ]
        }
    });

    $routeProvider.when('/dashboard',{
        templateUrl:'js/templates/dashboard.html',
        controller: 'PostController',
        resolve: {
            /**
             * Auth Check
             */
            AuthUser: ['$location','SessionStorage',
                function($location, SessionStorage){
                    if (SessionStorage.get('auth') === null){
                        $location.path('/');
                    }
                }
            ]
        }
    });

    $routeProvider.when('/add',{
        templateUrl:'js/templates/add.html',
        controller:'PostController',
        resolve: {
            /**
             * Auth Check
             */
            AuthUser: ['$location','SessionStorage',
                function($location, SessionStorage){
                    if (SessionStorage.get('auth') === null){
                        $location.path('/');
                    }
                }
            ]
        }
    });

    $routeProvider.when('/edit/:id',{
        templateUrl:'js/templates/edit.html',
        controller:'EditPostController',
        resolve: {
            /**
             * Auth Check
             */
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