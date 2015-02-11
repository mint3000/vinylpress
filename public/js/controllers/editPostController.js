var editPost = angular.module('EditPostCtrl', []);

editPost.controller('EditPostController', function($scope, $routeParams, CRUD, Comments){
    var getPost = CRUD.get('posts', $routeParams.id);
    getPost.success(function(response){
        $scope.getPost = response;
        var comments = Comments.get(response.id);
        comments.success(function(postComments){
            $scope.comments = postComments;
        });
    });


    $scope.saveEditPost = function(){
        var request = CRUD.put($routeParams.id, $scope.post);
        request.success(function(response){
            console.log(response);
        });
    };
});