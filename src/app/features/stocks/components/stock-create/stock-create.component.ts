import { Component, OnInit, inject, input, output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StockCreateRequest } from '../../../../core/models/StockCreateRequest.interface';
import { StocksService } from '../../../../core/services/stocks.service';

@Component({
  selector: 'app-stock-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './stock-create.component.html',
  styleUrl: './stock-create.component.css'
})
export class StockCreateComponent implements OnInit{

  
  public show = input<boolean>();
  public onCloseModal = output<boolean>();
  public form!:FormGroup;
  private readonly fb = inject(FormBuilder);
  private readonly stockService = inject(StocksService);

  listOfItems = [
    {id:'FANTASY',name:'Fantasy'},
    {id:'ROMANCE',name:'Romance'},
    {id:'MYSTERY',name:'Mystery'}
  ]

  ngOnInit(): void {
    this.form = this.fb.group({
      title: new FormControl('', Validators['required']),
      author: new FormControl('', Validators['required']),
      image: new FormControl('', Validators['required']),
      edition: new FormControl('', Validators['required']),
      genres: new FormControl([], Validators['required']),
      min: new FormControl(0, Validators['required']),
      max: new FormControl(0, Validators['required'])
    });
    //validators
  }  

  onSubmit(){
    const stockCreate:StockCreateRequest = {
      minQuantity: this.form.value.min,
      maxQuantity: this.form.value.max,
      book:{
        title: this.form.value.title,
        author: this.form.value.author,
        edition: this.form.value.edition,
        genres: this.form.value.genres,
        image: this.form.value.image
      }
    }
    console.log(stockCreate);
    this.stockService.createStock(stockCreate);
    this.closeModal();
  }
  closeModal(){
    this.onCloseModal.emit(false);
  }
}
