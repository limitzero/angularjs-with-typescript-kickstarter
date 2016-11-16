var MyApp;
(function (MyApp) {
    'use strict';
    var CalculatorViewModel = (function () {
        function CalculatorViewModel() {
        }
        return CalculatorViewModel;
    }());
    MyApp.CalculatorViewModel = CalculatorViewModel;
    var CalculatorController = (function () {
        function CalculatorController($scope, calculatorService) {
            this.calculatorService = calculatorService;
            this.vm = new CalculatorViewModel;
        }
        CalculatorController.prototype.add = function () {
            this.vm.result = this.calculatorService.add(this.vm.first, this.vm.second);
        };
        CalculatorController.prototype.subtract = function () {
            this.vm.result = this.calculatorService.subtract(this.vm.first, this.vm.second);
        };
        CalculatorController.IID = 'CalculatorController';
        CalculatorController.import = ["$scope", "CalculatorService"];
        return CalculatorController;
    }());
    MyApp.CalculatorController = CalculatorController;
})(MyApp || (MyApp = {}));
//# sourceMappingURL=CalculatorController.js.map