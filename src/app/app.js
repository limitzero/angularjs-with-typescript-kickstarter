var MyApp;
(function (MyApp) {
    'use strict';
    angular.module('kickstarter', []);
    function getModule() {
        return angular.module('kickstarter');
    }
    MyApp.getModule = getModule;
})(MyApp || (MyApp = {}));
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
var MyApp;
(function (MyApp) {
    'use strict';
    var CalculatorService = (function () {
        function CalculatorService() {
        }
        CalculatorService.prototype.add = function (x, y) {
            return x + y;
        };
        CalculatorService.prototype.subtract = function (x, y) {
            return x - y;
        };
        CalculatorService.IID = 'CalculatorService';
        return CalculatorService;
    }());
    MyApp.CalculatorService = CalculatorService;
})(MyApp || (MyApp = {}));
var MyApp;
(function (MyApp) {
    var HelloControllerViewModel = (function () {
        function HelloControllerViewModel() {
        }
        return HelloControllerViewModel;
    }());
    MyApp.HelloControllerViewModel = HelloControllerViewModel;
    var HelloController = (function () {
        function HelloController($scope) {
            this.vm = new HelloControllerViewModel();
            this.vm.message = "Hello from AngularJS w/TypeScript";
        }
        HelloController.IID = "HelloController";
        HelloController.inject = ["$scope"];
        return HelloController;
    }());
    MyApp.HelloController = HelloController;
})(MyApp || (MyApp = {}));
var MyApp;
(function (MyApp) {
    MyApp.getModule()
        .service(MyApp.CalculatorService.IID, MyApp.CalculatorService)
        .controller(MyApp.CalculatorController.IID, MyApp.CalculatorController)
        .controller(MyApp.HelloController.IID, MyApp.HelloController);
})(MyApp || (MyApp = {}));
//# sourceMappingURL=app.js.map