describe("transactions component", () => {

    let $compile: angular.ICompileService;
    let $rootScope: angular.IRootScopeService;
    let template: string;
    let element: angular.IAugmentedJQuery;

    beforeEach(() => angular.mock.module("ngTransactionsApp.shared"));

    beforeEach(inject(["$compile", "$rootScope", (_$compile_: angular.ICompileService, _$rootScope_: angular.IRootScopeService) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
    }]));

    it("should be defined", () => {
        template = "<ce-transactions></ce-transactions>";
        element = $compile(template)($rootScope.$new());
        expect(element).toBeDefined();
    });
});