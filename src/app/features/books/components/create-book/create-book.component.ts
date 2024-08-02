import { Component, OnInit, inject, input, output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BooksService } from '../../books.service';
import { Book } from '../../../../core/models/Book';
import { MainButtonComponent } from "../../../../shared/components/main-button/main-button.component";

@Component({
  selector: 'app-create-book',
  standalone: true,
  imports: [ReactiveFormsModule, MainButtonComponent],
  templateUrl: './create-book.component.html',
  styleUrl: './create-book.component.css'
})
export class CreateBookComponent implements OnInit{
  
  public open = input<boolean>();
  public close = output<boolean>();
  public form!:FormGroup;
  private readonly fb = inject(FormBuilder);
  private readonly bookService = inject(BooksService);
  public textButton= "Add";

  ngOnInit(): void {
    this.form = this.fb.group({
      title: new FormControl('',Validators['required']),
      author: new FormControl('',Validators['required']),
      image: new FormControl('',Validators['required']),
      genres: new FormControl([],Validators['required'])
    });
  }

  onSubmit(){
    const book:Book = {
      title: this.form.value.title,
      author: this.form.value.author,
      image: this.form.value.image,
      genres: this.form.value.genres,
    }
    console.log(book)

    this.bookService.createBook(book).subscribe(
      (res)=>console.log(res)
    );
  }
  onClose(){
    this.close.emit(false);
  }
}