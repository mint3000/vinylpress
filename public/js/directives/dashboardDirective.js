var dashboardDirective = angular.module('DashboardDirective', []);

dashboardDirective.directive('getAuthor', function(){
    return {
        restrict: 'AE',
        scope: {
            authorId: '@'
        },
        templateUrl: 'js/templates/postAuthor.html',
        controller: function($scope, CRUD){
            $scope.getPostAuthor = function(authorId){
                var user = CRUD.get('users', authorId);
                user.success(function(response){
                    $scope.author = response;
                });
            };
        },
        compile: function(){
            return function(scope, element, attrs){
                var authorId = attrs.authorid;
                scope.getPostAuthor(authorId);
            }
        }
    };
});

dashboardDirective.directive('checkLogin', function(){
   return {
       controller: function($scope, SessionStorage){
           $scope.checkLogin = function(){
                return SessionStorage.get('auth');
           };
       },
       compile: function(){
           return function(scope, element, attrs){
               console.log('logged in', scope.checkLogin());
               if (scope.checkLogin()){
                   element.html('<a href="#/admin/logout" class="btn btn-primary">Logout</a> <a href="#/admin/" class="btn btn-primary">Admin</a>');
               }else{
                   element.html('<a href="#/admin" class="btn btn-primary">Login</a>');
               }
           };
       }
   };
});