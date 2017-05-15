import { BasePageModel } from "./base.page-model";

export class TransactionsPageModel extends BasePageModel {
    public getUrl() { return `${this.baseUrl}`; }
}