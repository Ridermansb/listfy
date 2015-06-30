(function () {
    var app = angular.module('app');

    var HomeController = function ($scope, ProductsService) {
        $scope.add = function(productName) {

            if (!productName) {
                throw "Product name cold not be empty!";
            }

            var product = ProductsService.getBy(productName);
            if (product) {
                product.quantity++;
            } else {
                product = ProductsService.save(productName);
            }

            $scope.model.productName = '';
            return product;
        };

        $scope.remove = function (product) {
            ProductsService.remove(product);
        };

        $scope.getAll = function() {
            return ProductsService.getAll();
        };

        $scope.model= {
            productName: ''
        };
        return $scope;
    };
    app.controller('HomeController', HomeController);
})();
