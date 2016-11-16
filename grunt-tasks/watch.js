'use strict';
// main task name is watch, so the file name will be 'watch' and the object below are the options to configure for the task:
var task = {
	   // watch all files for changes and run tests:
		scripts: {
				files:  [  'src/app/**/*.ts', 'test/**/*.spec.ts'],
				//tasks: ['clean',  'ts:compile_source', 'ts:compile_specs', 'tslint', 'mochaTest'], // same as 'dev' task
				tasks: ['test'],
				options: {
					event: 'all',
				}
		}
};

module.exports = task;