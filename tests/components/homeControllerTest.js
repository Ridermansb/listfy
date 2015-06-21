describe("HomeController", function () {

    var scope, controller;
    beforeEach(module('app'));

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        controller = $controller('HomeController', {
            $scope: scope

        });
    }));

    it("should have a scope variable defined", function () {
        expect(scope).to.exist;

    });

    it("should have a accounts array", function () {
        expect(scope.products).to.have.length(0);
    });
});
