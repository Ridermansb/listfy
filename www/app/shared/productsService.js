(function () {
    angular.module('app')
        .factory('ProductsService', function (Product) {
            var save = function (productName) {
                return new Product(productName);
            };

            return {
                save: save
            };

        });
}());
