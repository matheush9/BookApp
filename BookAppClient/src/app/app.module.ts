import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from  '@angular/common/http';

import {MatCardModule} from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { BookListComponent } from './components/book/book-list/book-list.component';
import { AddBookComponent } from './components/book/add-book/add-book.component';
import { FormsModule } from '@angular/forms';
import { EditBookComponent } from './components/book/edit-book/edit-book.component';


@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    AddBookComponent,
    EditBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
