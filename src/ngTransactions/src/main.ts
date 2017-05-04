import { loadStyle } from "./app/utilities/load-style";

import "angular/angular.js";
import "angular-route/angular-route.min.js";

import "./app/configuration/configuration.module";
import "./app/configuration/configuration.service";

import "./app/shared/shared.module";
import "./app/shared/header.component";
import "./app/shared/file-upload.component";

import "./app/transactions/transactions.module";
import "./app/transactions/transaction-file-upload.component";
import "./app/transactions/transactions.component";
import "./app/transactions/transactions.service";

import "./app/app.module";

loadStyle(require("./app/app.scss"), "ngTransactionsApp");

declare var angular;

angular.bootstrap(document.body, ["ngTransactionsApp"]);