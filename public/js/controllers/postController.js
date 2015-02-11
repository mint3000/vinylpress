var posts = angular.module('PostCtrl', []);

posts.controller('PostController', function($scope, SessionStorage, CRUD){
    $scope.user = JSON.parse(SessionStorage.get('user'));

    var posts = CRUD.all();
    posts.success(function(response){
        console.log(response);
        $scope.allPosts = response;
    });
});