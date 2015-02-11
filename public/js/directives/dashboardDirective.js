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