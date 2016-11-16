/// <reference path="../_references.ts" />
/// <reference path="../../src/app/components/hello/controllers/HelloController.ts" />
describe("welcoming devloper to angular js with typescript", ()=>{

    describe('home controller',()=> {

        var scope;
        let helloController : MyApp.HelloController;

        // it needs a module created before components can be attached:
        beforeEach(angular.mock.module('kickstarter')); 

        beforeEach( inject(($rootScope) => {
            scope = $rootScope.$new();
            helloController  = new MyApp.HelloController(scope);
        }));

        it("should ensure that a welcome message is display when controller is instantiated", ()=>{
            expect(helloController.vm.message).toBe('Hello from AngularJS w/TypeScript');
        });

    });


});
