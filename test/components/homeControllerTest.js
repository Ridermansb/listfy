describe("HomeController", function () {
    var scope, controller, state, rootScope;
    var ProductsService;

    beforeEach(module('app'));

    beforeEach(inject(function ($rootScope, $state, $controller, _ProductsService_) {
        scope = $rootScope.$new();
        rootScope = $rootScope;
        state = $state.get('home');
        ProductsService = _ProductsService_;

        controller = $controller('HomeController', {
            $scope: scope,
            $state: $state,
            ProductsService: ProductsService
        });
    }));

    it("should have a scope variable defined", function () {
        expect(scope).to.exist;
    });

    it("should have a accounts array", function () {
        expect(scope.products).to.have.length(0);
    });

    it('should call save on productsService after save a product', function () {
        var productName = 'an product';
        var spySave = sinon.spy(ProductsService, 'save');

        scope.add(productName);

        expect(spySave).to.be.calledWith(productName);
    });

    it('should empty productName field after save', function () {
        var productName = 'an product';

        scope.add(productName);

        expect(scope.productName).to.be.empty;
    });

    describe('with home state', function () {
        it('should map to /', function () {
            expect(state.url).to.equal('/');
        });

        it('should have homeView templateUrl', function () {
            expect(state.templateUrl).to.equal('app/components/home/homeView.html');
        });

        it('should have footerView defined in footer views', function () {
            expect(state.views.footer).to.eql({templateUrl: 'app/components/home/footerView.html'});
        });
    });
});
