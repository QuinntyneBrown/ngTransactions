class FileUploadComponent implements angular.IComponentController {
    constructor(private $element: angular.IAugmentedJQuery, private BASE_URL: string
    ) { }
    
    public $onInit() {
        
        let dropZoneHTMLElement = this.$element[0].querySelector(".drop-zone") as HTMLElement;
        
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
                xhr.open("POST", `${this.BASE_URL}api/transactions/upload`, true);
                xhr.onload = (e) => {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {                            
                            (this as any).onUpload();
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
}

angular.module("ngTransactionsApp.shared")
    .component("ceFileUpload", {
        template: require("./file-upload.component.html"),
        bindings: {
            onUpload: '&'
        },
        controller: ["$element", "BASE_URL", FileUploadComponent]
    });