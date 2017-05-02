const configurationModule = angular.module("ngTransactionsApp.configuration", []).config(function ($routeProvider: angular.route.IRouteProvider) {
    $routeProvider
        .when("/",
        {
            template: "<ce-transactions></ce-transactions>"
        })
        .when("/transactions/fileupload",
        {
            template: "<ce-transaction-file-upload></ce-transaction-file-upload>"
        });
});
