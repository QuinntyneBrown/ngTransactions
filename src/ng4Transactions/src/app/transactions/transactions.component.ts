/// <reference path="transactions.d.ts" />
import { Component, OnInit, OnChanges } from "@angular/core";
import { TransactionsService } from "./transactions.service";

@Component({
    template: require("./transactions.component.html"),
    styles: [require("./transactions.component.scss")],
    selector: "ce-transactions"
})
export class TransactionsComponent implements OnInit { 
    constructor(private _transactionsService: TransactionsService) { }

    ngOnInit() {
        this._transactionsService
            .get()
            .subscribe(results => this.transactions = results.transactionSummaryItems);
    }

    public filter(value: string) { this.filterTerm = { "category": value }; }

    public transactions: Array<Transaction> = [];  

    public filterTerm: any = null;  
}