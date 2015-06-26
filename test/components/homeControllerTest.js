describe("HomeController", function () {
    var $scope, $controller, $state;
    var ProductsService;

    beforeEach(module('ui.router'));
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

    it("should have a scope variable defined", function () {
        expect($scope).to.exist;
    });

    it("should have a accounts array", function () {
        expect($scope.products).to.have.length(0);
    });

    it("should have a model defined", function () {
        expect($scope.model).to.exist;
    });

    it('should call save on productsService after save a product', function () {
        var productName = 'an product';
        var spySave = sinon.spy(ProductsService, 'save');
        $scope.add(productName);
        expect(spySave).to.be.calledWith(productName);
    });

    it('should add product into list after save a product', function () {
        var productName = 'an product';
        $scope.add(productName);
        expect($scope.products).to.include.something.with.property('name', productName);
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
        expect(productAdded.totalToBuy).to.equal(1);
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
