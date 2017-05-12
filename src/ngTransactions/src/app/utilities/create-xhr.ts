declare interface CreateXHR { (): XMLHttpRequest };

const createXHR: CreateXHR = (): XMLHttpRequest => new XMLHttpRequest();

angular.module("ngTransactionsApp.utilities")
    .value("createXHR", createXHR);
