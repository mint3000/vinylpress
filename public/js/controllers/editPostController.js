var editPost = angular.module('EditPostCtrl', []);

editPost.controller('EditPostController', function($scope, $route, $routeParams, CRUD, Comments){

    var getPost = CRUD.get('posts', $routeParams.id);
    getPost.success(function(response){
        $scope.getPost = response;

        $scope.post = {
            title : response.title,
            content: response.text
        };

        var comments = Comments.get(response.id);
        comments.success(function(postComments){
            $scope.comments = postComments;
        });
    });

    $scope.saveEditPost = function(){
        var request = CRUD.update('posts', $routeParams.id, $scope.post);
        request.success(function(response){
            $scope.message = response.status;
        });
    };

    $scope.deleteComment = function(id){
        var request = CRUD.delete('comments', id);
        request.success(function(){
            $route.reload();
        });
    };
});