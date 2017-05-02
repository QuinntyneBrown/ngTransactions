class FileUploadComponent implements angular.IComponentController {
    constructor(private $attrs: angular.IAttributes,
        private $element: angular.IAugmentedJQuery,
        private $scope: angular.IScope) {

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
                var packageFiles = function (fileList: FileList) {
                    var formData = new FormData();
                    for (var i = 0; i < fileList.length; i++) {
                        formData.append(fileList[i].name, fileList[i]);
                    }
                    return formData;
                }

                var xhr = new XMLHttpRequest();
                xhr.open("POST", "/api/fileupload/add", true);
                xhr.onload = (e) => {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                            //responseText = xhr.responseText;
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
        controller: ["$attrs", "$element", "$scope", FileUploadComponent]
    });