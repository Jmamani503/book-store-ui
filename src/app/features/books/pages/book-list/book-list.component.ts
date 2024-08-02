import { Component, OnInit, inject } from '@angular/core';
import { CreateBookComponent } from "../../components/create-book/create-book.component";
import { BookCardComponent } from "../../components/book-card/book-card.component";
import { BooksService } from '../../books.service';
import { Book } from '../../../../core/models/Book';
import { JsonPipe } from '@angular/common';
import { MainButtonComponent } from "../../../../shared/components/main-button/main-button.component";

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CreateBookComponent, BookCardComponent, JsonPipe, MainButtonComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit{

  private readonly bookService = inject(BooksService);
  public bookList!:Book[];
  public openCreateBook: boolean = false;
  public buttonText = "Add Book";

  ngOnInit(): void { 
    this.bookService.getAllBooks()
      .subscribe((data) => this.bookList = data);
  }

  public onOpenCreateBook(){
    this.openCreateBook = true;
  }

  public onCloseCreateBook(openCreateBook:boolean){
    this.openCreateBook= openCreateBook;
  }

}
