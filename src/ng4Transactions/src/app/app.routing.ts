import { Routes, RouterModule } from '@angular/router';
import { TransactionsComponent, TransactionFileUploadComponent } from "./transactions";

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'spend'
    },
    {
        path: 'spend',
        pathMatch: 'full',
        component: TransactionsComponent
    },
    {
        path: 'upload',
        pathMatch: 'full',
        component: TransactionFileUploadComponent
    }
];

export const routing = RouterModule.forRoot(routes, { useHash: false });