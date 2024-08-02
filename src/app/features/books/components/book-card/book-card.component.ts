import { Component, input } from '@angular/core';
import { Book } from '../../../../core/models/Book';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css'
})
export class BookCardComponent {

  public book = input.required<Book>()
}
