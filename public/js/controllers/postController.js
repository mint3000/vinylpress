var posts = angular.module('PostCtrl', []);

posts.controller('PostController', function($scope, $routeParams, SessionStorage, CRUD){
    $scope.currentUser = JSON.parse(SessionStorage.get('user'));


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
});