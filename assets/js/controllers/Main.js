angular.module('MainController', []).controller('MainController', function ($rootScope, $scope, $window, Upload, $routeParams, $timeout) {
    $rootScope.sideActive = false;

    $rootScope.$on('routeChangeStart', (e) => {
        console.log("Route started");
    });

    $rootScope.$on('routeChangeSuccess', (e) => {
        console.log(e);
    });

    $rootScope.$on('routeChangeError', (e) => {
        console.log("error");
    });
});