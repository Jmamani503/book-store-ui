import { Routes } from "@angular/router";
import { TransactionsListComponent } from "./transactions-list/transactions-list.component";
import { TransactionDetailsComponent } from "./transaction-details/transaction-details.component";


export const REPORTS_ROUTES: Routes = [
    {
        path: "", component: TransactionsListComponent
    },
    {
        path: ":id", component: TransactionDetailsComponent
    }
]