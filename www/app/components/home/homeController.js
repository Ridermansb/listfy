(function () {
    var app = angular.module('app');

    var HomeController = function ($scope, ProductsService) {
        $scope.products = [];
        $scope.productName = '';
        $scope.add = function(productName) {
            ProductsService.save(productName);
            $scope.productName = '';
        };
    };

    app.controller('HomeController', HomeController);
})();
