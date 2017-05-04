declare interface ITransactionsService {
    get(): angular.IPromise<Array<Transaction>>;
}

class TransactionsService implements ITransactionsService {
    constructor(public $http: angular.IHttpService,
        public $q: angular.IQService,
        public configurationService: IConfigurationService
    ) { }

    public get(): angular.IPromise<Array<Transaction>> {
        var deferred = this.$q.defer();
        this.$http({ method: "GET", url: `${this.configurationService.baseUrl}api/transactions/getsummary` }).then((response: { data: GetSummaryResponseData }) => {
            return deferred.resolve(response.data.transactionSummaryItems);
        });
        return deferred.promise;
    }
}

angular.module("ngTransactionsApp.transactions")
    .service("transactionsService", ["$http", "$q","configurationService",TransactionsService]);