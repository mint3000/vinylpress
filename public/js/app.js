var app = angular.module('blog', [
    'ngRoute',
    'LoginCtrl',
    'PostCtrl',
    'EditPostCtrl',
    'MainCtrl',
    'AuthService',
    'CrudService',
    'CommentService',
    'DashboardDirective',
    'MainDirective'
]);

app.config(function($routeProvider){

    $routeProvider.when('/', {
        templateUrl: 'js/templates/index.html',
        controller: 'MainController'
    });

    $routeProvider.when('/admin',{
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

    $routeProvider.when('/admin/logout', {
        templateUrl: 'js/templates/logout.html',
        controller: 'LoginController'
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

    $routeProvider.when('/post/:id',{
        templateUrl: 'js/templates/post.html',
        controller: 'PostController'
    });

});