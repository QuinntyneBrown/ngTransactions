describe("transaction service", () => {

    var mock$Http: any;
    var transactionsService: ITransactionsService;
    var $rootScope: angular.IRootScopeService;
    var $httpBackend: angular.IHttpBackendService;
    var $q: ng.IQService;

    beforeEach(() => {
        angular.mock.module("ngTransactionsApp.transactions"); 

        angular.mock.module(["$provide",($provide: angular.auto.IProvideService) => {
            $provide.value("BASE_URL", "");
        }]);       
    });

    beforeEach(inject([
        "$httpBackend",
        "$q",
        "$rootScope",
        "transactionsService",
        (_$httpBackend_: angular.IHttpBackendService, _$q_: angular.IQService, _$rootScope_: angular.IRootScopeService, _transactionsService_: ITransactionsService) => {
            $httpBackend = _$httpBackend_;
            $rootScope = _$rootScope_;
            $q = _$q_;
            transactionsService = _transactionsService_;
    }]));

    afterEach(() => {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it("should be defined", () => {
        expect(transactionsService).toBeDefined();
    });    
});