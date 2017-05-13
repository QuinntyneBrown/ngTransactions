//https://github.com/berniegp/mock-xmlhttprequest
//https://github.com/jameslnewell/xhr-mock

describe("file upload component", () => {

    let $compile: angular.ICompileService;
    let $rootScope: angular.IRootScopeService;
    let template: string;
    let element: angular.IAugmentedJQuery;

    beforeEach(() => {
        angular.mock.module("ngTransactionsApp.shared");

        angular.mock.module(["$provide", ($provide: angular.auto.IProvideService) => {
            $provide.value("BASE_URL", "");
            $provide.value("createXHR", () => new MockXMLHttpRequest());
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
});


class MockXMLHttpRequest {

    constructor() {

    }

    public onreadystatechange: (this: XMLHttpRequest, ev: Event) => {

    }

    public open(method: string, url: string, async?: boolean, user?: string, password?: string) {

    }

    public send(data?: any) {

    }

    public addEventListener<K extends keyof XMLHttpRequestEventMap>(type: K, listener: (this: XMLHttpRequest, ev: XMLHttpRequestEventMap[K]) => any, useCapture?: boolean) { }
}
