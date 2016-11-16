/// <references path="../../typings/angular/angular.d.ts" />
module MyApp {
  'use strict';

  	export class CalculatorViewModel {
		  public first: number; 
		  public second: number;
		  public result: number;
	  }

	export interface ICalculatorController {
		/*
		View model that exposes properties to the view without going through the $scope
		*/
		vm : CalculatorViewModel;
	}

	export class CalculatorController implements ICalculatorController {

		static IID = 'CalculatorController';

		public  vm : CalculatorViewModel;

		static import = ["$scope", "CalculatorService"];
		
		constructor($scope: ng.IScope, private calculatorService:CalculatorService) {
			this.vm = new CalculatorViewModel
		} 

	    public add(): void {			
				this.vm.result = this.calculatorService.add(this.vm.first, this.vm.second);
		}
		
		public subtract(): void {
				this.vm.result = this.calculatorService.subtract(this.vm.first, this.vm.second);
		}
	}
}