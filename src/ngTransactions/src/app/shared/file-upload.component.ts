class FileUploadComponent implements angular.IComponentController {
    constructor(private $attrs: angular.IAttributes,
        private $element: angular.IAugmentedJQuery,
        private $location: angular.ILocationService,
        private $scope: angular.IScope,
        private configurationService: IConfigurationService
    ) { }
    
    public $onInit() {
        
        let dropHTMLElement = this.$element[0].querySelector(".drop-zone") as HTMLElement;
        
        dropHTMLElement.addEventListener("dragover", (dragEvent: DragEvent) => {
            dragEvent.stopPropagation();
            dragEvent.preventDefault();
            angular.element(dragEvent.currentTarget).scope();
        }, false);
        
        dropHTMLElement.addEventListener("drop", (dragEvent: DragEvent) => {
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
        controller: ["$attrs", "$element", "$location","$scope", "configurationService", FileUploadComponent]
    });