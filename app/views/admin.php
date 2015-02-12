<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Vinylpress admin</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
    <link href='http://fonts.googleapis.com/css?family=Rokkitt:400,700' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="css/style.css"/>
    <!--js-->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>

    <!--angular-->
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.11/angular.min.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.11/angular-route.js"></script>
</head>
<body ng-app="blog">
    <div class="container">
        <header>
            <div class="row shaded">
                <div class="col-sm-10">
                    <h1><a href="#/">VinylPress</a></h1>
                </div>
                <div class="col-sm-2 text-right">
                    <check-login></check-login>
                </div>
            </div>
        </header>
    </div>
    <div class="container" ng-view>

    </div>
    <!--angular app-->
    <script src="/js/app.js"></script>
    <!--angular controllers-->
    <script src="js/controllers/loginController.js"></script>
    <script src="js/controllers/postController.js"></script>
    <script src="js/controllers/editPostController.js"></script>
    <script src="js/controllers/mainController.js"></script>
    <!--angular services-->
    <script src="js/services/authService.js"></script>
    <script src="js/services/crudService.js"></script>
    <script src="js/services/commentService.js"></script>
    <!--angular directives-->
    <script src="js/directives/dashboardDirective.js"></script>
    <script src="js/directives/mainDirective.js"></script>
</body>
</html>