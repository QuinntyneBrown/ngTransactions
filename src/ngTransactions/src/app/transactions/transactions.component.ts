class TransactionsComponent implements angular.IComponentController {
    constructor(public transactionService: ITransactionsService) { }    

    public $onInit() {        
        this.transactionService.get().then((results) => {            
            this.transactions = results;
        });
    }

    public transactions: any = [];
}

angular.module("ngTransactionsApp.transactions")
    .component("ceTransactions", {
        template: require("./transactions.component.html"),
        controller: ["transactionsService", TransactionsComponent]
    });