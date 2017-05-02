class HeaderComponent implements angular.IComponentController {
    constructor() { }

    public $onInit() {


    }

}

angular.module("ngTransactionsApp.shared")
    .component("ceHeader", {
        template: require("./header.component.html"),
        controller: [HeaderComponent]
    });