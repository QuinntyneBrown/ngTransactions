class TransactionsComponent implements angular.IComponentController {
    constructor(public transactionService: ITransactionsService) { }    

    public $onInit() {        
        this.transactionService.get().then((results) => {            
            this.transactions = results;
        });
    }

    public transactions: Array<Transaction> = [];

    public filterInput: string = "";
}

angular.module("ngTransactionsApp.transactions")
    .component("ceTransactions", {
        template: require("./transactions.component.html"),
        controller: ["transactionsService", TransactionsComponent]
    });