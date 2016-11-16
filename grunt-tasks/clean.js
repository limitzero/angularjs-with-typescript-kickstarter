'use strict';
var task = {
            // clean transpiled javsacript code:
            source: ["src/**/*.js", "src/**/*.js.map"],
            test: ["test/**/*.js", "test/**/*.js.map"],
            // for distribution, minification and uglify...
            dist: [
                    '.dist/*.*'
                ]
};

module.exports = task;
