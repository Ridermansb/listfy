(function () {
    var app = angular.module('app');
    var Product = function() {
        function Product(name) {
            this.name = name;
            this.quantity = 1;
        }

        Product.prototype.increaseQuantity = function () {
            this.quantity++;
            return this.quantity;
        };

        Product.prototype.decreaseQuantity = function () {
            if(this.quantity > 1) {
                this.quantity--;
            }
            return this.quantity;
        };

        return Product;
    };

    app.factory('Product', [Product]);

}());
