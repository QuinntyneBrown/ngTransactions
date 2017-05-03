class FileUploadComponent implements angular.IComponentController {
    constructor(private $attrs: angular.IAttributes,
        private $element: angular.IAugmentedJQuery,
        private $scope: angular.IScope,
        private configurationService: IConfigurationService
    ) {

        this.$onInit = this.$onInit.bind(this);
    }

    public $onInit() {
        let drop = <any>this.$element.find(".drop-zone")[0];
        drop.addEventListener("dragover", (dragEvent: DragEvent) => {
            dragEvent.stopPropagation();
            dragEvent.preventDefault();
            angular.element(dragEvent.currentTarget).scope();
        }, false);

        
        drop.addEventListener("drop", (dragEvent: DragEvent) => {
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
                xhr.open("POST", `${this.configurationService.baseUrl}api/transactions/upload`, true);
                xhr.onload = (e) => {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
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
        controller: ["$attrs", "$element", "$scope", "configurationService", FileUploadComponent]
    });