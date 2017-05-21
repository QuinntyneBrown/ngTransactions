import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
    template: require("./transaction-file-upload.component.html"),
    styles: [require("./transaction-file-upload.component.scss")],
    selector: "ce-transaction-file-upload"
})
export class TransactionFileUploadComponent { 
    constructor(public _router: Router) {}

    public redirectToSpendPage() { this._router.navigate(["spend"]); }
}
