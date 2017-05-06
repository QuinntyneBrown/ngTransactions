const transactionsModule = angular.module("ngTransactionsApp.transactions", [
    "ngTransactionsApp.shared",
    "ngRoute"
]).config(["$routeProvider", ($routeProvider: angular.route.IRouteProvider) => {
    $routeProvider
        .when("/", { template: "<ce-transactions></ce-transactions>" })
        .when("/upload", { template: "<ce-transaction-file-upload></ce-transaction-file-upload>" });
}]);