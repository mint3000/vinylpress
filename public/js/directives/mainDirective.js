var mainDirective = angular.module('MainDirective', []);

mainDirective.directive('comments', function(){
   return {
       templateUrl: 'js/templates/comments.html',
       controller: function($scope, CRUD){
           $scope.getComments = function(id){
               var comments = CRUD.get('comments', id);
               comments.success(function(response){
                   $scope.comments = response;
               });
           };
       },
       compile: function(){
           return function(scope, element, attrs){
               var postId = attrs.commentid;
               scope.getComments(postId);
           }
       }
   }
});

mainDirective.directive('addComment', function(){

    return {
        templateUrl: 'js/templates/add-comment.html',
        compile: function(){
            return {};
        }
    }

});