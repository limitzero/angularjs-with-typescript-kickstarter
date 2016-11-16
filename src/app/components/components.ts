/// <reference path="../app.ts" />
/// <reference path="hello/controllers/HelloController.ts" />
/// <reference path="calculator/controllers/CalculatorController.ts" />
/// <reference path="calculator/services/CalculatorService.ts" />
module MyApp {

	getModule()
		// -- services --
		.service(CalculatorService.IID, CalculatorService)
		
		// -- directives --

		// -- controllers --
		.controller(CalculatorController.IID, CalculatorController)
		.controller(HelloController.IID, HelloController);
}
