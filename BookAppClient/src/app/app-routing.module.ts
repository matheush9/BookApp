import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './components/book/add-book/add-book.component';
import { BookListComponent } from './components/book/book-list/book-list.component';
import { EditBookComponent } from './components/book/edit-book/edit-book.component';

const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: 'books',
    component: BookListComponent
  },
  {
    path: 'book/add',
    component: AddBookComponent
  },
  {
    path: 'book/edit/:id',
    component: EditBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
