angular.module('HomeController', []).controller('HomeController', function ($rootScope, $scope, niveauFactory, matiereFactory, paysFactory, villeFactory, $timeout) {
    $rootScope.sideActive = false;

    $scope.getVille = function (ville) {
        villeFactory.getByPays(ville)
            .then(function (response) {
                console.log(response.data);
                var options = {
                    data: response.data,
                    getValue: "ville",
                    list: {
                        match: {
                            enabled: true
                        }
                    }
                };

                $("#ville").easyAutocomplete(options);
            });
    };

    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);

    var optionDate = {
        format: "dd/mm/yyyy"
    };

    var elemPicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(elemPicker, optionDate);

    niveauFactory.getAll()
        .then(function (response) {
            $scope.niveau = response.data;
            $scope.selectedNiveau = angular.copy($scope.niveau[0]);
            setTimeout(() => {
                var elems = document.querySelectorAll('select');
                var instances = M.Select.init(elems);
            }, 100);
        });

    paysFactory.getAll()
        .then(function (response) {
            $scope.pays = response.data;
            $scope.selectedPays = angular.copy($scope.pays[0]);
            setTimeout(() => {
                var elems = document.querySelectorAll('select');
                var instances = M.Select.init(elems);
            }, 100);
        });

    matiereFactory.getAll()
        .then(function (response) {
            $scope.matiere = response.data;
            $scope.selectedMatiere = angular.copy($scope.matiere[0]);
            setTimeout(() => {
                var elems = document.querySelectorAll('select');
                var instances = M.Select.init(elems);
            }, 100);
        });

    $scope.get_interval = function () {
        var dateBtn = document.querySelector('#btnDate');
        dateBtn.click();
        setTimeout(() => {
            var options = {
                twelveHour: false
            };

            var elemTimePicker = document.querySelectorAll('.timepicker');
            var instances = M.Timepicker.init(elemTimePicker, options);
        }, 100);
    }

    $scope.get_location = function () {
        var dateBtn = document.querySelector('#btnLocation');
        dateBtn.click();
    }

    $scope.agree_date_interval = function (timeBefore, timeAfter) {
        var dateCours = document.querySelector('#date_cours');
        $scope.cours_date = dateCours.value + "; " + timeBefore + " - " + timeAfter;
    }

    $scope.agree_localisation = function (adresse) {
        var ville = document.querySelector('#ville').value;
        $scope.location = adresse + ", " + ville;
    }
});