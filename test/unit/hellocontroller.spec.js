describe("welcoming devloper to angular js with typescript", function () {
    describe('home controller', function () {
        var scope;
        var helloController;
        beforeEach(angular.mock.module('kickstarter'));
        beforeEach(inject(function ($rootScope) {
            scope = $rootScope.$new();
            helloController = new MyApp.HelloController(scope);
        }));
        it("should ensure that a welcome message is display when controller is instantiated", function () {
            expect(helloController.vm.message).toBe('Hello from AngularJS w/TypeScript');
        });
    });
});
//# sourceMappingURL=hellocontroller.spec.js.map