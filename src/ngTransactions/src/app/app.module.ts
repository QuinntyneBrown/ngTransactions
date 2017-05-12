const ngTransactionsApp = angular.module("ngTransactionsApp", [
    "ngRoute",
    "ngTransactionsApp.utilities",
    "ngTransactionsApp.shared",
    "ngTransactionsApp.transactions"
]).config(["$locationProvider", ($locationProvider: angular.ILocationProvider) => {
    $locationProvider.html5Mode({ enabled: true, requireBase: false });
}])
.constant("BASE_URL", "http://transaction-service.azurewebsites.net/")
.run(["loadStyle", (loadStyle) => {
    loadStyle(require("./app.scss"), "ngTransactionsApp");
}]);