const ngTransactionsApp = angular.module("ngTransactionsApp", [
    "ngRoute",
    "ngTransactionsApp.shared",
    "ngTransactionsApp.transactions"
]).config(["$locationProvider", ($locationProvider: angular.ILocationProvider) => {
    $locationProvider.html5Mode(true);
}]).constant("BASE_URL", "http://transaction-service.azurewebsites.net/");
