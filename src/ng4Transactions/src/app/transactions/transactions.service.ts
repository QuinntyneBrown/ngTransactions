/// <reference path="transactions.d.ts" />

import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";

@Injectable()
export class TransactionsService {
    constructor(private _http: Http) { }

    public get(): Observable<{ transactionSummaryItems: Array<Transaction> }> {
        return this._http
            .get(`${this._baseUrl}transactions/getSummary`)
            .map(data => data.json())
            .catch(err => {
                return Observable.of(false);
            });
    }

    public get _baseUrl() { return "http://transaction-service.azurewebsites.net/api/"; }
}
