import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book-model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  addBookRequest: Book = {
    id: 0, 
    author: '',
    description: '',
    language: '',
    publicationDate: new Date,
    title: '',
    totalPages: 0,
    publisher: ''
  };

  constructor(private bookService: BookService, private router: Router) {}
  
  ngOnInit(): void {

  }
  addBook() {
    this.bookService.addBook(this.addBookRequest)
    .subscribe({
      next: (book) => {
        this.router.navigate(['books']);
      }
    })
  }
}
