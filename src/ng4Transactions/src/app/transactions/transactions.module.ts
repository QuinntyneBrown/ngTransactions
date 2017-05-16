import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { TransactionsComponent } from './transactions.component';
import { TransactionFileUploadComponent } from './transaction-file-upload.component';
import { TransactionsService } from "./transactions.service";

const declarables = [TransactionsComponent, TransactionFileUploadComponent];
const providers = [TransactionsService];

@NgModule({
    imports: [CommonModule],
    exports: [declarables],
    declarations: [declarables],
    providers: providers
})
export class TransactionsModule { }
