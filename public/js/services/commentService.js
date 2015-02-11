var commentService = angular.module('CommentService', []);

commentService.factory('Comments', function($http){

    return {
        get: function(postId){
            return $http.get('api/comments/' + postId);
        }
    };
});