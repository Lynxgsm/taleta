angular.module('mainFactory', []).factory('mainFactory', function ($rootScope, $http) {
    var host = "http://" + window.location.hostname;
    //var urlBase = host + "/?json_route=";
    var urlBase = "http://paddock.qualif.arkeup.com/?json_route=";
    $rootScope.urlBase = urlBase;
    var dataFactory = {};
    var config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;',
        }
    }

    dataFactory.addToCart = function (userId, woosession, variation, product, labelBroder, fontFamily, fontSize, textPosition, logo) {
        var data = {
            "user_id": userId,
            "woo_session": woosession,
            "id_variation": variation,
            "id_product": product,
            "qty": 1,
            "label_broder": labelBroder,
            "font_family": fontFamily,
            "font_size": fontSize,
            "text_position": textPosition,
            "logo_base64": logo
        }

        console.log(data);

        var config = {
            headers: {
                'Content-Type': 'text/plain;charset=utf-8;',
            }
        }

        var url = urlBase + "/addproductcart";

        return $http.post(url, data, config);
    }

    dataFactory.getProductDetails = function (id) {
        var data = {
            "id_product": id
        }

        var config = {
            headers: {
                'Content-Type': 'text/plain;charset=utf-8;',
            }
        }

        var url = urlBase + "/productdetails";

        return $http.post(url, data, config);
    }

    dataFactory.getAllProducts = function () {
        var url = urlBase + "/productlist";
        return $http.get(url);
    }

    dataFactory.getAllColors = function () {
        var url = "assets/data/color.json";
        return $http.get(url);
    }

    return dataFactory;
});
