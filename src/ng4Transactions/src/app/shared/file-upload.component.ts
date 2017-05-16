import { Component, OnInit, ElementRef, Inject, EventEmitter, Output } from "@angular/core";

@Component({
    template: require("./file-upload.component.html"),
    styles: [require("./file-upload.component.scss")],
    selector: "ce-file-upload"
})
export class FileUploadComponent implements OnInit {
    constructor(private _elementRef: ElementRef) {}

    ngOnInit() {
        const dropZoneHTMLElement = this._elementRef.nativeElement.querySelector(".drop-zone") as HTMLElement;

        dropZoneHTMLElement.addEventListener("dragover", (dragEvent: DragEvent) => {
            dragEvent.stopPropagation();
            dragEvent.preventDefault();
        }, false);

        dropZoneHTMLElement.addEventListener("drop", (dragEvent: DragEvent) => {
            dragEvent.stopPropagation();
            dragEvent.preventDefault();
            if (dragEvent.dataTransfer && dragEvent.dataTransfer.files) {
                let packageFiles = function (fileList: FileList) {
                    let formData = new FormData();
                    for (let i = 0; i < fileList.length; i++) {
                        formData.append(fileList[i].name, fileList[i]);
                    }
                    return formData;
                }

                let xhr = new XMLHttpRequest();
                xhr.open("POST", `http://transaction-service.azurewebsites.net/api/transactions/upload`, true);
                xhr.onload = (e) => {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                            this.onUpload.emit();
                        }
                        else {
                            console.error(xhr.statusText);
                        }
                    }
                };
                xhr.send(packageFiles(dragEvent.dataTransfer.files));
                return "";
            }
        }, false);
    }

    @Output()
    public onUpload: EventEmitter<any> = new EventEmitter();
}
