module MyApp {
	'use strict';
	
	angular.module('kickstarter', []);
	
	export function getModule() : ng.IModule {
		return angular.module('kickstarter');
	}
}