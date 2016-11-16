'use strict'; 
var task = {
    options: {
        configuration : 'tslint.json', 
        force: false
    }, 
    files : {
        src:  ['src/app/**/*.ts' ], 
        test: ['tests/**/*.ts']
    }
};

module.exports = task;