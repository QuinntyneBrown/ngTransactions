declare interface ITransactionsService {
    get(): angular.IPromise<Array<Transaction>>;
}

class TransactionsService implements ITransactionsService {
    constructor(public $http: angular.IHttpService,
        public $q: angular.IQService,
        public configurationService: IConfigurationService
    ) {
        this.get = this.get.bind(this);
    }

    public get(): angular.IPromise<Array<Transaction>> {
        var deferred = this.$q.defer();
        this.$http({ method: "GET", url: `${this.configurationService.baseUrl}/api/transactions/get` }).then((response) => {
            return deferred.resolve(response);
        });
        return deferred.promise;
    }
}

angular.module("ngTransactionsApp.transactions")
    .service("transactionsService", ["$http","$q",TransactionsService]);