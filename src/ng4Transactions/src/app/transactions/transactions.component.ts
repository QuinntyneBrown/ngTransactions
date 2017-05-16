import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./transactions.component.html"),
    styles: [require("./transactions.component.scss")],
    selector: "ce-transactions"
})
export class TransactionsComponent implements OnInit { 
    ngOnInit() {

    }
}
