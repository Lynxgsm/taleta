angular.module('HomeController', []).controller('HomeController', function ($rootScope, $scope) {
    $rootScope.sideActive = false;
    var options = {
        data: {
            "Apple": null,
            "Microsoft": null,
            "Google": 'https://placehold.it/250x250'
        },
    }
    var elems = document.querySelectorAll('select');
    var instances = M.Select.init(elems);

    var elemPicker = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elemPicker);

    var elemComplete = document.querySelectorAll('.autocomplete');
    var instances = M.Autocomplete.init(elemComplete, options);
});