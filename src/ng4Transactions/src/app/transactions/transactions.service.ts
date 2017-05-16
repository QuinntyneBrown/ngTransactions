import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";

@Injectable()
export class TransactionsService {
    constructor(private _http: Http) { }

    public get() {
        return this._http
            .get(`${this._baseUrl}/api/transactions/get`)
            .map(data => data.json())
            .catch(err => {
                return Observable.of(false);
            });
    }

    public get _baseUrl() { return ""; }

}
