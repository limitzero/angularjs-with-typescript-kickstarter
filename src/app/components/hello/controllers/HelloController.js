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
//# sourceMappingURL=HelloController.js.map