'use strict';
var time_grunt = require('time-grunt');

module.exports = function(grunt){
    // project configuration (load the root task into a variable for annexing file-based task onto it)
	var taskObject = {
		pkg: grunt.file.readJSON('package.json'), 
	};

	// loop through the tasks in the 'grunt-task' folder. ingore and with an underscore at 
	// the beginning, and add them to the taskObject or invoke if they are a function:
	grunt.file.expand('grunt-tasks/*.js', '!grunt-tasks/_*.js').forEach(function(file) {
		var name = file.split('/');
		name = name[name.length - 1].replace('.js','');
		var task = require('./' + file);

		if(grunt.util._.isFunction(task)){
			task(grunt);
		}else{
			taskObject[name] = task;
		}
	});

    grunt.initConfig(taskObject); 

	// automatically load in all grunt npm tasks:
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// display timings for grunt tasks:
	time_grunt(grunt); 

	// tasks for grunt to manage build, test and deploy cycle:
	grunt.registerTask('init', 'clean');

	grunt.registerTask('build',  [
		'init',
		'ts:compile_app_source',
		'ts:compile_app_specs',	 
		]);

    grunt.registerTask('test', [
		'build',
		 'karma']); // auto-watch disabled  here (use watch task)

	grunt.registerTask('default', ['watch']);
}
