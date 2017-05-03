class TrasactionFileUploadComponent implements angular.IComponentController {
    constructor(public $window:angular.IWindowService) { }

    public redirectToIndexUrl() {
        this.$window.location.href = "/";        
    }
}

angular.module("ngTransactionsApp.transactions")
    .component("ceTransactionFileUpload", {
        template: require("./transaction-file-upload.component.html"),
        controller: ["$window",TrasactionFileUploadComponent]
    });
