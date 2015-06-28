(function () {
    var ProductsService = function (Product, lodash) {

        var products = [];

        var getBy = function (productName) {
            return lodash.find(products, 'name', productName);
        };

        var save = function (productName) {
            var product = new Product(productName);
            products.push(product);
            return product;
        };

        var getAll = function() {
            return products;
        };

        var remove = function(product) {
            return lodash.remove(products, product);
        };

        return {
            save: save,
            getBy: getBy,
            getAll: getAll,
            remove: remove
        };

    };

    angular.module('app').factory('ProductsService', ProductsService);
}());
