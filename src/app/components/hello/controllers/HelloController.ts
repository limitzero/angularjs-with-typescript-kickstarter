/// <reference path="../../../../../typings/angularjs/angular.d.ts" />
module MyApp {

    export class HelloControllerViewModel {
        public message:string;
    }

    export interface IHelloController {
        vm : HelloControllerViewModel;
    }    

    export class HelloController implements IHelloController{
        public vm:HelloControllerViewModel; 
        
        public static IID :string = "HelloController";
        public static inject = ["$scope"]; 
        constructor($scope : ng.IScope) {
            this.vm = new HelloControllerViewModel(); 
            this.vm.message = "Hello from AngularJS w/TypeScript";
        } 
    }
}