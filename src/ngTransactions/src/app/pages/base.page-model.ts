import { config } from "../../../protractor.conf";

declare var browser, by, element;

export abstract class BasePageModel {

    public go() {
        browser.get(this.getUrl());
    }

    public getHeading() {
        var heading = element(by.css('h1'));
        return heading.getText();
    }

    public clickButtonByCss(css: string) {
        element(by.css(css)).click();
    }

    public get spendLink() { return element(by.css("a.spend")); }

    public get uploadLink() { return element(by.css("a.upload")); }

    public baseUrl = config.baseUrl;

    public abstract getUrl();
}