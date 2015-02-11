var comments = angular.modeul('CommentCtrl', []);

comments.controller('CommentController', function($scope, SessionStorage, CHUD){
    $scope.user = JSON.parse(SessionStorage.get('user'));


    var getComments = CHUD.get();
    getComments.success(function(response){
       console.log(response);
    });
});