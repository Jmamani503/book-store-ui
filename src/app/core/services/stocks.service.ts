import { Injectable, inject, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Stock } from "../models/Stock.interface";
import { tap } from "rxjs"
import { StockCreateRequest } from "../models/StockCreateRequest.interface";

@Injectable({providedIn:'root'})
export class StocksService{

    private readonly _http = inject(HttpClient);
    private baseUrl: string = "http://localhost:8081/api";
    public stocks = signal<Stock[]>([]);

    constructor(){
        this.getStocks();
    }

    public getStocks(): void{
        this._http.get<Stock[]>(`${this.baseUrl}/stocks`)
        .pipe(
            tap((stocks: Stock[]) => this.stocks.set(stocks))
        )
        .subscribe();
    }

    public createStock(stock: StockCreateRequest){
        this._http.post<StockCreateRequest>(`${this.baseUrl}/stocks`,stock)
        .subscribe((res:any)=> (console.log(res)));
    }

}