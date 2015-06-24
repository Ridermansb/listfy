describe("HomeController", function () {
    var scope, controller, state, rootScope;

    beforeEach(module('ui.router'));
    beforeEach(module('ng-mfb'));
    beforeEach(module('app'));

    beforeEach(inject(function ($rootScope, $state, $controller) {
        scope = $rootScope.$new();
        rootScope = $rootScope;
        state = $state.get('home');
        controller = $controller('HomeController', {
            $scope: scope,
            $state: $state,
            $location: location
        });
    }));

    it("should have a scope variable defined", function () {
        expect(scope).to.exist;
    });

    it("should have a accounts array", function () {
        expect(scope.products).to.have.length(0);
    });

    describe('with home state', function () {
        it('should map to /', function () {
            expect(state.url).to.equal('/');
        });

        it('shoukd have homeView templateUrl', function () {
            expect(state.templateUrl).to.equal('app/components/home/homeView.html');
        });

        it('should have footerView defined in footer views', function () {
            expect(state.views.footer).to.eql({templateUrl: 'app/components/home/footerView.html'});
        });
    });
});
