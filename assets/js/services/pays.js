angular.module('paysFactory', []).factory('paysFactory', function ($rootScope, $http) {
    var urlBase = "./API/pays";
    $rootScope.urlBase = urlBase;
    var dataFactory = {};
    var config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;',
        }
    }

    dataFactory.add = function (libelle) {
        var data = {
            "libelle": libelle
        }

        var url = urlBase + "/add";

        return $http.post(url, data, config);
    }


    dataFactory.delete = function (id) {
        var data = {
            "ID": id
        }

        var url = urlBase + "/delete";

        return $http.delete(url, data, config);
    }

    dataFactory.update = function (id, libelle) {
        var data = {
            "ID": id,
            "libelle": libelle
        }

        var url = urlBase + "/update";

        return $http.put(url, data, config);
    }


    dataFactory.get = function (id) {
        var url = urlBase + "/get";
        return $http.get(url);
    }

    dataFactory.getAll = function () {
        var url = urlBase + "/getAll";
        return $http.get(url);
    }

    return dataFactory;
});