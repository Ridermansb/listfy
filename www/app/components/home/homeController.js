(function () {
    var app = angular.module('app');

    var HomeController = function ($scope, lodash, ProductsService) {
        $scope.products = [];

        $scope.add = function(productName) {
            var product = ProductsService.save(productName);
            $scope.products.push(product);
            $scope.model.productName = '';
            return product;
        };
        $scope.remove = function (product) {
            lodash.remove($scope.products, product);
        };

        $scope.model= {
            productName: ''
        };
        return $scope;
    };
    app.controller('HomeController', HomeController);
})();
