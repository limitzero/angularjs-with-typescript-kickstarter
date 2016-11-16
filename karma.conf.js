// Karma configuration
// Generated on Fri Nov 11 2016 09:10:32 GMT-0600 (Central Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    //frameworks: ['jasmine', 'requirejs'],
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [ 
      'jspm_packages/npm/jquery@3.1.1/dist/jquery.min.js',
      'jspm_packages/github/angular/bower-angular@1.5.8/angular.min.js',
      'jspm_packages/github/angular/bower-angular-mocks@1.5.8/angular-mocks.js',

      // there is a bug in sinon that it only will load its dependencies if it is in AMD 
      // or NodeJS enviroment, sorry RequireJS/CommonJS  ==> sinon has been replaced with jasime spyOn(..)
      /*
      'node_modules/sinon/lib/sinon/*.js',
      'node_modules/sinon/lib/sinon/util/*.js',
      'node_modules/sinon/lib/sinon.js',
      */

      'src/app/app.js',
      'test/**/*.spec.js'
    ],

    proxies: {
            '/test/': '/base/test/',
            '/src/app/': '/base/src/app/',
            '/jspm_packages/': '/base/jspm_packages/'
        },

    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    //reporters:  ['progress'],
    
    // credit : http://stackoverflow.com/questions/16897623/how-can-i-get-a-list-of-passing-tests-from-karma-runner-suite
    reporters:   ['spec'], 

    /*
    specReporter: {
      maxLogLines: 5,         // limit number of lines logged per test
      suppressErrorSummary: true,  // do not print error summary
      suppressFailed: false,  // do not print information about failed tests
      suppressPassed: false,  // do not print information about passed tests
      suppressSkipped: true,  // do not print information about skipped tests
      showSpecTiming: false // print the time elapsed for each spec
    },
  */
  
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-spec-reporter'
      ],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,  // ==> we have this step in the grunt file...

    // start these browsers (currently available)
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // If browser does not capture in given timeout [ms], kill it
     captureTimeout: 60000,

    browserNoActivityTimeout : 60000, //default 10000 (gives message "Disconnected, because no message in 10000 ms" if left as default)
    browserDisconnectTimeout : 10000, // default 2000
    browserDisconnectTolerance : 1, // default 0

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
