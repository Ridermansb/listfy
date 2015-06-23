describe("HomeController", function () {
    var scope, controller, state, rootScope, urlRouterProvider ;

    beforeEach(module('ui.router'));
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

    describe('with state', function () {
        it('map to /', function() {
            expect(state.url).to.equal('/');
        });

        it('with homeView template', function() {
            expect(state.templateUrl).to.equal('app/components/home/homeView.html');
        });
    });
});
