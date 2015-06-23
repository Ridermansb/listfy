(function () {
    var app = angular.module('app');

    var HomeController = function ($scope) {
        $scope.products = [];
    };

    app.controller('HomeController', HomeController);
})();
