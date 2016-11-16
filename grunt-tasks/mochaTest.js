// this is the self-defined task to run only the unit tests with mocha and not fire up PhantomJS
// if the default grunt mocha task is executed via the contrib plug-in
// (you know that you are using the default mocha contrib plug-in when you get the message:
//     Warning: PhantomJS timed out, possibly due to a missing Mocha run() call. 
//)
'use strict';
var task = {
        test: {
          options: {
            reporter: 'spec',
            captureFile: 'results.txt', // Optionally capture the reporter output to a file
            quiet: false, // Optionally suppress output to standard out (defaults to false)
            clearRequireCache: false, // Optionally clear the require cache before running tests (defaults to false)
            noFail: false // Optionally set to not fail on failed tests (will still fail on other errors)
          },
          src: ['src/tests/**/*.specs.js']
        }
   };
 
module.exports  = task;