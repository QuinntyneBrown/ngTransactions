import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./transaction-file-upload.component.html"),
    styles: [require("./transaction-file-upload.component.scss")],
    selector: "ce-transaction-file-upload"
})
export class TransactionFileUploadComponent implements OnInit { 
    ngOnInit() {

    }
}
