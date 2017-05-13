declare interface CreateXHR { (): XMLHttpRequest };

angular.module("ngTransactionsApp.utilities")
    .value("createXHR",() => new XMLHttpRequest());
