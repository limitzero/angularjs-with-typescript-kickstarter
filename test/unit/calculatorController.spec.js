describe('using a service to determine the results of addition and subtraction of two numbers', function () {
    describe('when enlisting the calculator service inside of the calculator controller', function () {
        var scope;
        var calculatorController;
        var calculatorServiceStub = new MyApp.CalculatorService();
        beforeEach(angular.mock.module('kickstarter'));
        beforeEach(inject(function ($rootScope) {
            scope = $rootScope.$new();
            calculatorController = new MyApp.CalculatorController(scope, calculatorServiceStub);
        }));
        it('should ensure that it delegates to the service when adding two numbers', function () {
            var vm = calculatorController.vm;
            vm.first = 1;
            vm.second = 3;
            spyOn(calculatorServiceStub, 'add').and.callThrough();
            calculatorController.add();
            expect(calculatorServiceStub.add).toHaveBeenCalledWith(vm.first, vm.second);
            expect(calculatorController.vm.result).toBe(vm.first + vm.second);
        });
        it('should ensure that it delegates to the service when substracting two numbers', function () {
            var vm = calculatorController.vm;
            vm.first = 1;
            vm.second = 3;
            spyOn(calculatorServiceStub, 'subtract').and.callThrough();
            calculatorController.subtract();
            expect(calculatorServiceStub.subtract).toHaveBeenCalledWith(vm.first, vm.second);
            expect(calculatorController.vm.result).toBe(vm.first - vm.second);
        });
    });
});
//# sourceMappingURL=calculatorController.spec.js.map