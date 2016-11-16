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
//# sourceMappingURL=CalculatorService.js.map