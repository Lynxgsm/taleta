angular.module('TuteurSigninController', []).controller('TuteurSigninController', function ($rootScope, $scope, $window, $timeout, paysFactory) {

    var optionDate = {
        format: "dd/mm/yyyy"
    };

    var elemPicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(elemPicker, optionDate);

    paysFactory.getAll()
        .then(function (response) {
            $scope.pays = response.data;
            console.log(response.data);
            $scope.selectedPays = angular.copy($scope.pays[0]);
            setTimeout(() => {
                var elems = document.querySelectorAll('select');
                var instances = M.Select.init(elems);
            }, 100);
        });

    $('.stepper').activateStepper();
})