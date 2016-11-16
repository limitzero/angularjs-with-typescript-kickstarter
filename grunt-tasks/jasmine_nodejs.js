// jasmine task specifically created for nodejs package installation via npm (grunt-jasmine-nodejs)
'use strict';
var task = {
        options: {
            specNameSuffix: ".specs.js", // also accepts an array 
            helperNameSuffix: "helper.js",
            useHelpers: false,
            random: false,
            seed: null,
            defaultTimeout: null, // defaults to 5000 
            stopOnFailure: false,
            traceFatal: true,
            // configure one or more built-in reporters 
            reporters: {
                console: {
                    colors: true,        // (0|false)|(1|true)|2 
                    cleanStack: 1,       // (0|false)|(1|true)|2|3 
                    verbosity: 4,        // (0|false)|1|2|3|(4|true) 
                    listStyle: "indent", // "flat"|"indent" 
                    activity: false
                }
          }
        },
         // setup all targets here: first one is the tests
         test: {
                 options: {
                        useHelpers: true
                 },
                 specs: [ 
                         'src/tests/**/*.js'
                 ]
         }
};

module.exports  = task; 
