import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared";
import { TransactionsComponent } from './transactions.component';
import { TransactionFileUploadComponent } from './transaction-file-upload.component';
import { TransactionsService } from "./transactions.service";

const declarables = [TransactionsComponent, TransactionFileUploadComponent];

const providers = [
    TransactionsService
];

@NgModule({
    imports: [CommonModule, RouterModule, SharedModule, BrowserAnimationsModule],
    exports: [declarables],
    declarations: [declarables],
    providers: providers
})
export class TransactionsModule { }
