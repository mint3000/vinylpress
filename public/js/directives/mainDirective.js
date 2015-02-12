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
        controller: function($scope, CRUD, SessionStorage){
            $scope.saveComment = function(comment, postid){
                var user = JSON.parse(SessionStorage.get('user'));
                var auth = SessionStorage.get('auth');
                if (auth === null){
                    alert('You must login to leave a comment');
                }else{
                    /**
                     * Append author id and post id to the comment object
                     *
                     * @type {string}
                     */
                    comment.author_id = user.id;
                    comment.post_id = +postid;

                    var saveComment = CRUD.create('comments', comment);
                    saveComment.success(function(response){
                        console.log(response);
                        $scope.getComments(postid);
                    });
                }

            };
        },
        compile: function(){
            return function(scope, element, attrs){
                scope.addComment = function($event){
                    var commentButton = angular.element($event.target);
                    var commentForm = commentButton.siblings('.comment-form');
                    commentForm.show();
                    commentButton.hide();
                };

                scope.postComment = function($event){
                    scope.saveComment(scope.comment, attrs.postid);
                    var postCommentButton = angular.element($event.target);
                    var commentForm = postCommentButton.parents('.comment-form');
                    var addCommentButton = commentForm.siblings('.add-commment');
                    commentForm.hide();
                    addCommentButton.show();
                };
            };
        }
    }

});