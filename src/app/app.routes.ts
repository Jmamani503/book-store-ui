import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "dashboard",
        loadChildren: () => import("./features/dashboard/dashboard.route").then(m => m.DASHBOARD_ROUTES) 
    },
    {
        path:"books",
        loadChildren: () => import("./features/books/books.routes").then(m => m.BOOKS_ROUTES)
    },
    {
        path: "stocks",
        loadChildren: () => import("./features/stocks/stocks.routes").then(m => m.STOCKS_ROUTES) 
    },
    {
        path: "reports",
        loadChildren: () => import("./features/report/reports.route").then(m => m.REPORTS_ROUTES) 
    }

];
