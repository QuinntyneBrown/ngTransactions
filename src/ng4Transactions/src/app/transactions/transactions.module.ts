import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { SharedModule } from "../shared";
import { TransactionsComponent } from './transactions.component';
import { TransactionFileUploadComponent } from './transaction-file-upload.component';
import { TransactionsService } from "./transactions.service";

const declarables = [TransactionsComponent, TransactionFileUploadComponent];
const providers = [
    TransactionsService,
    { provide: "BASE_URL", useValue: "http://transaction-service.azurewebsites.net/" }
];

@NgModule({
    imports: [CommonModule, SharedModule],
    exports: [declarables],
    declarations: [declarables],
    providers: providers
})
export class TransactionsModule { }
