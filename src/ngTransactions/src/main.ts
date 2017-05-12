import * as angular from 'angular';
import "angular-route/angular-route.min.js";

import "./app/utilities/utilities.module";
import "./app/utilities/create-xhr";
import "./app/utilities/load-style";

import "./app/shared/shared.module";
import "./app/shared/header.component";
import "./app/shared/file-upload.component";

import "./app/transactions/transactions.module";
import "./app/transactions/transaction-file-upload.component";
import "./app/transactions/transactions.component";
import "./app/transactions/transactions.service";

import "./app/app.module";

angular.bootstrap(document.body, ["ngTransactionsApp"]);