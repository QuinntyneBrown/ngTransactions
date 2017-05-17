import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    template: require("./transaction-file-upload.component.html"),
    styles: [require("./transaction-file-upload.component.scss")],
    selector: "ce-transaction-file-upload"
})
export class TransactionFileUploadComponent { 
    constructor(public _router: Router) {}

    public redirectToSpendPage() { this._router.navigate(["spend"]); }
}
