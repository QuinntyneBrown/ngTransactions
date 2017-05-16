import { Component, ChangeDetectionStrategy, Input, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
    template: require("./app.component.html"),
    styles: [require("./app.component.scss")],
    selector: "ce-app",
    encapsulation:ViewEncapsulation.None
})
export class AppComponent { }