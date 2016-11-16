/// <reference path="../_references.ts" />
/// <reference path="../../src/app/components/calculator/controllers/CalculatorController.ts" />
/// <reference path="../../src/app/components/calculator/services/CalculatorService.ts" />


/*
---------------------- Using Mocks w/Jasmine and AngularJS ----------------------

This will test the calculator controller with an injected calculator service as a reference or mock using 
the jasmime  library for mocking the object with attached methods for invocation, for dependencies we 
will manually inject them into the controller for testing as opposed to using the $provide and $controller 
services from angular....

*/

describe('using a service to determine the results of addition and subtraction of two numbers',() =>{

    describe('when enlisting the calculator service inside of the calculator controller', ()=> {
        var scope; 

        let calculatorController : MyApp.CalculatorController;
        let calculatorServiceStub = new MyApp.CalculatorService();

        // create the module and create a stub as a dependency for the controller:
        beforeEach(angular.mock.module('kickstarter'));

        beforeEach(  inject( ($rootScope)  => {
            scope = $rootScope.$new();
            calculatorController = new MyApp.CalculatorController(scope, calculatorServiceStub);
         })); 

        it('should ensure that it delegates to the service when adding two numbers', ()=> {
            // arrange:
            var vm = calculatorController.vm; 
            vm.first = 1; 
            vm.second = 3;
            spyOn(calculatorServiceStub, 'add').and.callThrough(); // complete the native call:

            // act:
            calculatorController.add();

            // assert:
            expect(calculatorServiceStub.add).toHaveBeenCalledWith(vm.first,vm.second);
            expect(calculatorController.vm.result).toBe(vm.first + vm.second);
        }); 

        it('should ensure that it delegates to the service when substracting two numbers', ()=> {
            // arrange:
            var vm = calculatorController.vm; 
            vm.first = 1; 
            vm.second = 3;
            spyOn(calculatorServiceStub, 'subtract').and.callThrough(); // complete the native call:

            // act:
            calculatorController.subtract();

            // assert:
            expect(calculatorServiceStub.subtract).toHaveBeenCalledWith(vm.first,vm.second);
            expect(calculatorController.vm.result).toBe(vm.first - vm.second);
        }); 

    }); 

});