describe("file upload component", () => {

    var $compile: angular.ICompileService;
    var $rootScope: angular.IRootScopeService;
    var template: string;
    var element: angular.IAugmentedJQuery;

    beforeEach(() => {
        angular.mock.module("ngTransactionsApp.shared");

        angular.mock.module(["$provide", ($provide: angular.auto.IProvideService) => {
            $provide.value("BASE_URL", "");
            $provide.value("createXHR", () => new XMLHttpRequest());
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