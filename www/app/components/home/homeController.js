(function () {
    var app = angular.module('app');

    var HomeController = function ($scope, ProductsService) {
        $scope.products = [];

        $scope.add = function(productName) {
            var product = ProductsService.save(productName);
            $scope.products.push(product);
            $scope.model.productName = '';
            return product;
        };

        $scope.model= {
            productName: ''
        };
        return $scope;
    };
    app.controller('HomeController', HomeController);
})();
