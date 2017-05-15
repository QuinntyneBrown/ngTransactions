import { BasePageModel } from "./base.page-model";

export class TransactionFileUploadPageModel extends BasePageModel {
    public getUrl() { return `${this.baseUrl}/upload`; }
}