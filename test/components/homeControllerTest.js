describe("HomeController", function () {
    var $scope, $controller, $state;
    var ProductsService;

    beforeEach(module('ui.router'));
    beforeEach(module('ngLodash'));
    beforeEach(module('app'));

    beforeEach(inject(function ($rootScope, _$state_, _$controller_, _ProductsService_) {
        $scope = $rootScope.$new();
        $state = _$state_.get('home');
        ProductsService = _ProductsService_;

        $controller = _$controller_('HomeController', {
            $scope: $scope,
            $state: $state,
            ProductsService: ProductsService
        });
    }));

    module(function($provide) {
        $provide.service('$scope', $scope);
    });

    it("should have a scope variable defined", function () {
        expect($scope).to.exist;
    });

    it("should have a accounts array", function () {
        expect($scope.getAll()).to.have.length(0);
    });

    it("should have a model defined", function () {
        expect($scope.model).to.exist;
    });

    it('should call save on productsService after save a product', function () {
        var productName = 'an product';
        var spySave = sinon.spy(ProductsService, 'save');
        $scope.add(productName);
        expect(spySave).to.be.calledWith(sinon.match(productName));
    });

    it('should add product into list after save a product', function () {
        var productName = 'an product';
        $scope.add(productName);
        expect($scope.getAll()).to.include.something.with.property('name', productName);
    });

    it('should remove product from list after remove a product', function () {
        var productName = 'an product';
        $scope.add(productName + '1');
        var productToRemove = $scope.add(productName + '2');
        $scope.add(productName + '3');

        $scope.remove(productToRemove);

        expect($scope.getAll()).to.not.include.something.that.deep.equals(productToRemove);
    });

    it('should empty productName field after save', function () {
        var productName = 'an product';
        $scope.add(productName);
        expect($scope.model).to.have.ownProperty('productName');
        expect($scope.model.productName).to.be.empty;
    });

    it('should 1 unit after save', function () {
        var productName = 'an product';
        var productAdded = $scope.add(productName);
        expect(productAdded.quantity).to.equal(1);
    });

    it('should increase total to buy on click button', function () {
        var productName = 'an product';
        var productAdded = $scope.add(productName);

        productAdded.increaseQuantity();

        expect(productAdded.quantity).to.equal(2);
    });

    it('should decrease total to buy on click button', function () {
        var productName = 'an product';
        var productAdded = $scope.add(productName);

        productAdded.increaseQuantity();
        productAdded.decreaseQuantity();

        expect(productAdded.quantity).to.equal(1);
    });

    it('should increase quantity when user add a product that exist', function () {
        var productName = 'an product';
        $scope.add(productName);
        var productAddAgain = $scope.add(productName);

        expect(productAddAgain.quantity).to.equal(2);
    });

    it('should not add product with same name', function () {
        var productName = 'an product';
        var firstAdd = $scope.add(productName);
        $scope.add(productName);

        expect(firstAdd.quantity).to.equal(2);
        expect($scope.getAll()).to.have.length(1);
    });

    it('the minimal for quantity is 1, cant allow decrease more whe quantity is 1 on click button', function () {
        var productName = 'an product';
        var productAdded = $scope.add(productName);

        productAdded.decreaseQuantity();

        expect(productAdded.quantity).to.equal(1);
    });

    describe('state', function () {
        it('should map to /', function () {
            expect($state.url).to.equal('/');
        });
    });

    describe('model', function () {
        it('should have productName property in model', function () {
            expect($scope.model.productName).to.exist.and.be.empty;
        });
    });
});
