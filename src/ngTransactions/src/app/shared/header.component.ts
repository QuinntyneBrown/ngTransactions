class HeaderComponent implements angular.IComponentController {
    constructor(public $location: angular.ILocationService) { }
}

angular.module("ngTransactionsApp.shared")
    .component("ceHeader", {
        template: require("./header.component.html"),
        controller: ["$location",HeaderComponent]
    });