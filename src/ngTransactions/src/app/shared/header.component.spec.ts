describe("header component", () => {

    var $compile: angular.ICompileService;
    var $rootScope: angular.IRootScopeService;
    var template: string;
    var element: angular.IAugmentedJQuery;

    beforeEach(() => {
        angular.mock.module("ngTransactionsApp.shared");
    });

    beforeEach(inject(["$compile","$rootScope",(_$compile_: angular.ICompileService, _$rootScope_: angular.IRootScopeService) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
    }]));

    it("should be defined", () => {
        template = "<ce-header></ce-header>";
        element = $compile(template)($rootScope.$new());
        expect(element).toBeDefined();
    });
});