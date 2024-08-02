import { Routes } from "@angular/router";
import { StocksListComponent } from "./stocks-list/stocks-list.component";
import { StockDetailsComponent } from "./stock-details/stock-details.component";
import { StockCreateComponent } from "./components/stock-create/stock-create.component";


export const STOCKS_ROUTES: Routes = [
    {
        path: "", component: StocksListComponent
    },
    {
        path: ":id", component: StockDetailsComponent
    }
]