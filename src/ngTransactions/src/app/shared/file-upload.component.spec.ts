import * as angular from 'angular';
import { createMockXHR } from "../utilities/create-mock-xhr";

describe("file upload component", () => {

    let $compile: angular.ICompileService;
    let $rootScope: angular.IRootScopeService;
    let template: string;
    let element: angular.IAugmentedJQuery;

    beforeEach(() => {
        angular.mock.module("ngTransactionsApp.shared");

        angular.mock.module(["$provide", ($provide: angular.auto.IProvideService) => {
            $provide.value("BASE_URL", "");
            $provide.value("createXHR", createMockXHR);
        }]);  
    });

    beforeEach(inject(["$compile", "$rootScope", (_$compile_: angular.ICompileService, _$rootScope_: angular.IRootScopeService) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
    }]));

    it("should be defined", () => {
        template = "<ce-file-upload></ce-file-upload>";
        element = $compile(template)($rootScope.$new());        
        expect(element).toBeDefined();
    });
    

    it("should stop propagation and prevent default in the event of drag over", () => {
        template = "<ce-file-upload></ce-file-upload>";
        let stopPropagationCalled = false;
        let preventDefaultCalled = false;
        let dropZoneElement = element[0].querySelector(".drop-zone");
        let dragOverEvent = new Event('dragover');

        dragOverEvent.stopPropagation = () => stopPropagationCalled = true;
        dragOverEvent.preventDefault = () => preventDefaultCalled = true;

        element = $compile(template)($rootScope.$new());

        dropZoneElement.dispatchEvent(dragOverEvent);

        expect(preventDefaultCalled).toBeTruthy();
        expect(stopPropagationCalled).toBeTruthy();
    });
});
