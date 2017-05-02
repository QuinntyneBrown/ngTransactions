class TrasactionFileUploadComponent implements angular.IComponentController {
    constructor(transactionsService: ITransactionsService) {
        
    }
}

angular.module("ngTransactionsApp.transactions")
    .component("ceTransactionFileUpload", {
        template: require("./transaction-file-upload.component.html"),
        controller: ["transactionsService", TrasactionFileUploadComponent]
    });
