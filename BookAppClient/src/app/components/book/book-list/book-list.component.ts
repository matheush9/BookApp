import { Component, OnInit } from '@angular/core';
import { Book } from '../book-model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  
  books: Book[] = [];
  constructor(private booksService: BookService) {}

  ngOnInit(): void {
      this.booksService.getAllBooks().subscribe({
        next: (books) => {
          this.books = books;
        },
        error: (response) => {
          console.log(response);
        }
      })
  }

}
