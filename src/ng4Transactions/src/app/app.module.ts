import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from "./app.component";
import { TransactionsModule } from "../app/transactions";
import { SharedModule } from "../app/shared";
import { routing } from "./app.routing";

@NgModule({
    declarations: [AppComponent],
    imports: [
        SharedModule,
        TransactionsModule,
        routing,

        BrowserModule,
        HttpModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

export * from "./environment"