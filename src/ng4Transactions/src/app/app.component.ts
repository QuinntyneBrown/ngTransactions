import { Component } from "@angular/core";
import { Route } from "@angular/router";

@Component({
    template: require("./app.component.html"),
    styles: [require("./app.component.scss")],
    selector: "ce-app"
})
export class AppComponent {
    public prepareRoute(outlet) {
        return outlet.activeRoute ? outlet.activeRoute.config.animation : '';
    }
}