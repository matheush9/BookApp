import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Book } from '../book-model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {

  bookDetails: Book = {
    id: 0,
    author: '',
    description: '',
    language: '',
    title: '',
    publicationDate: new Date,
    totalPages: 0,
    publisher: ''  
  }

  constructor(private route: ActivatedRoute, private bookService: BookService, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( {
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.bookService.getBook(id)
          .subscribe({
            next: (response) => {
              this.bookDetails = response;
            }
          })
        }
      }
    })
  }

  updateBook() {
    this.bookService.updateBook(this.bookDetails.id,
       this.bookDetails)
       .subscribe({
        next: (response) => {
          this.router.navigate(['books']);  
        }
       })
  }

  deleteBook(id: number) {
    this.bookService.deleteBook(id)
    .subscribe({
      next: (response) => {
        this.router.navigate(['books']);
      }
    })
  }
}