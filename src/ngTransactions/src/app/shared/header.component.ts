class HeaderComponent implements angular.IComponentController {
    constructor(
        public $element: angular.IAugmentedJQuery,
        public $location: angular.ILocationService,
        public $scope: angular.IScope) { }

    public $onInit() {
        this.$scope.$on("$locationChangeSuccess",
            (event: angular.IAngularEvent, ...args) => this.addClassToActiveLink(event, args));
    }

    public addClassToActiveLink(event: angular.IAngularEvent, ...args) {
                
        const path = this.$location.path();

        switch (path) {
            case "/":
                this._addOnce("active", this.spendLinkHTMLElement);
                this.uploadLinkHTMLElement.classList.remove("active");
                break;

            case "/upload":
                this._addOnce("active", this.uploadLinkHTMLElement);
                this.spendLinkHTMLElement.classList.remove("active");
                break;
        }
    }

    private _addOnce(cssClass: string, element: HTMLElement) {
        if (element.classList.contains(cssClass))
            return;

        element.classList.add(cssClass);
    }

    public get spendLinkHTMLElement() { return this.$element[0].querySelector(".spend") as HTMLElement; }

    public get uploadLinkHTMLElement() { return this.$element[0].querySelector(".upload") as HTMLElement; }

}

angular.module("ngTransactionsApp.shared")
    .component("ceHeader", {
        template: require("./header.component.html"),
        controller: ["$element","$location","$scope",HeaderComponent]
    });