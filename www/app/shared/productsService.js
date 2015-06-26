(function () {
    angular.module('app')
        .factory('ProductsService', function () {
            var save = function (productName) {
                return {
                    name: productName,
                    totalToBuy: 1
                };
            };

            return {
                save: save
            };

        });
}());
