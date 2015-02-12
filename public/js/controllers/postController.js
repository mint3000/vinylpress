var posts = angular.module('PostCtrl', []);

posts.controller('PostController', function($scope, $route, $routeParams, SessionStorage, CRUD){
    $scope.currentUser = JSON.parse(SessionStorage.get('user'));


    if ($routeParams){
        var getPost = CRUD.get('posts', $routeParams.id);
        getPost.success(function(response){
            $scope.getPost = response;
        });
    }

    /**
     * Get all posts
     */
    var posts = CRUD.all('posts');
    posts.success(function(response){
        $scope.allPosts = response;
    });

    $scope.savePost = function(){
        /**
         * Append userId to post data
         */
        $scope.post.userId = $scope.currentUser.id;

        /**
         * Create post request
         *
         * @type {$scope.post}
         */
        var request = CRUD.create('posts', $scope.post);
        request.success(function(response){
            $scope.message = response.status;
        });
    };

    $scope.checkAuthor = function(){

        angular.forEach($scope.allPosts, function(v){
            if (v.author_id === $scope.currentUser.id){
                return false;
            }
            return true;
        });

    };

    $scope.deletePost = function(id){
        var request = CRUD.delete('posts', id);
        request.success(function(){
            $route.reload();
        });
    };
});