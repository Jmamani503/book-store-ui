import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../core/models/Book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private readonly _http = inject(HttpClient);
  private baseUrl = "http://localhost:8081/api/books";
  constructor() { }

  getAllBooks():Observable<Book[]>{
    return this._http.get<Book[]>(this.baseUrl);
  }
  
  createBook(book:Book):Observable<Book>{
    return this._http.post<Book>(this.baseUrl,book);
  }
  
}
