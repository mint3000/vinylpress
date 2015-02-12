var main = angular.module('MainCtrl', []);

main.controller('MainController', function($scope, CRUD, Comments){

    var posts = CRUD.all('posts');
    posts.success(function(response){
        $scope.allPosts = response;
    });

    $scope.getComments = function(id){
        var comments = Comments.get(id);
        comments.success(function(postComments){
            $scope.comments = postComments;
        });
    };

});