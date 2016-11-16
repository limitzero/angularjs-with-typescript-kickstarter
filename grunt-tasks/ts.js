'use strict';
var task = {
            compile_app_source : {
                src: ['src/app/**/*.ts'],
                out: 'src/app/app.js',
                 options: {
                    module: 'amd', // for compressing the source, we need amd on Web side
                     fast: 'never'
                 }
            },
            // unit tests:
            compile_app_specs : {
                    src: ['test/**/*.spec.ts'],
                    options: {
                        module: 'commonjs', 
                        fast: 'never'
                    }
            }
            // compile e2e tests: (TBD)
};

module.exports = task;
