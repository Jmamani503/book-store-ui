import { Component, inject } from '@angular/core';
import { StocksService } from '../../../core/services/stocks.service';
import { pipe } from 'rxjs';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';
import { StockCreateComponent } from '../components/stock-create/stock-create.component';

@Component({
  selector: 'app-stocks-list',
  standalone: true,
  imports: [StockCreateComponent],
  templateUrl: './stocks-list.component.html',
  styleUrl: './stocks-list.component.css'
})
export class StocksListComponent {

  public isOpen: boolean = false;
  private readonly stockService = inject(StocksService);
  private readonly router = inject(Router);

  stocksList = this.stockService.stocks;

  public addStock(){
    this.isOpen = true;
    console.log("hey>")
  }
  public closeModal(show:boolean){
    this.isOpen = show;
  }
}
