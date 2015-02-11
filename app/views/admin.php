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
                <div class="col-sm-12">
                    <h1>VinylPress</h1>
                </div>
            </div>
        </header>
    </div>
    <div class="container" id="view" ng-view>

    </div>
    <!--angular app-->
    <script src="/js/app.js"></script>
    <!--angular controllers-->
    <script src="js/controllers/loginController.js"></script>
    <script src="js/controllers/postController.js"></script>
    <!--angular services-->
    <script src="js/services/authService.js"></script>
    <script src="js/services/crudService.js"></script>
</body>
</html>