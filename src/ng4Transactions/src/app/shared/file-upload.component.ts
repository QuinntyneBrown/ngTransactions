import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./file-upload.component.html"),
    styles: [require("./file-upload.component.scss")],
    selector: "ce-file-upload"
})
export class FileUploadComponent implements OnInit { 
    ngOnInit() {

    }
}
