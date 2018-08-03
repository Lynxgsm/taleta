angular.module('appRoutes', []).config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'assets/pages/home.html',
            controller: 'HomeController'
        })
        .when('/tuteur', {
            templateUrl: 'assets/pages/tuteur.html',
            controller: 'TuteurController'
        })
        .when('/tuteur-signin', {
            templateUrl: 'assets/pages/tuteur-signin.html',
            controller: 'TuteurSigninController'
        })
        .when('/tuteur-login', {
            templateUrl: 'assets/pages/tuteur-login.html',
            controller: 'TuteurLoginController'
        })
        .when('/user-signin', {
            templateUrl: 'assets/pages/user-signin.html',
            controller: 'UserSigninController'
        })
        .when('/user-login', {
            templateUrl: 'assets/pages/user-login.html',
            controller: 'UserLoginController'
        })
        .when('/user', {
            templateUrl: 'assets/pages/user.html',
            controller: 'UserController'
        })
        .otherwise({
            redirectTo: '/'
        });


}]);