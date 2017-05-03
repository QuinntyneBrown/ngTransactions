class TransactionsComponent implements angular.IComponentController {
    constructor(public transactionService: ITransactionsService) { }    

    public $onInit() {        
        this.transactionService.get().then((results) => {            
            this.transactions = results;
        });
    }

    public transactions: any = [];

    public searchInput: string = "";
}

angular.module("ngTransactionsApp.transactions")
    .component("ceTransactions", {
        template: require("./transactions.component.html"),
        controller: ["transactionsService", TransactionsComponent]
    });