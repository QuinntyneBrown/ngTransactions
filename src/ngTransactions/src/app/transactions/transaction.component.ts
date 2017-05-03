class TransactionComponent implements angular.IComponentController {
    constructor() { }
    
    public transaction: any = [];
}

angular.module("ngTransactionsApp.transactions")
    .component("ceTransaction", {
        template: require("./transaction.component.html"),
        controller: [TransactionComponent]
    });