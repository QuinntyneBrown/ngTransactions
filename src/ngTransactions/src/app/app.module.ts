const ngTransactionsApp = angular.module("ngTransactionsApp", [
    "ngRoute",
    "ngTransactionsApp.configuration",
    "ngTransactionsApp.shared",
    "ngTransactionsApp.transactions"
]).config(["$locationProvider", ($locationProvider: angular.ILocationProvider) => {
    $locationProvider.html5Mode(true);
}]);