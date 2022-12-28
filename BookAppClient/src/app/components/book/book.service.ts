import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Book } from "./book-model";
import { environment } from 'src/environment/environment';



@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseApiUrl: string | undefined;

  constructor(private http: HttpClient) {
    this.baseApiUrl = environment.baseApiUrl
   }
  
  getAllBooks(): Observable<Book[]> {  
    return this.http.get<Book[]>(this.baseApiUrl + '/api/book');
  }

  addBook(addBookRequest: Book): Observable<Book> {
    return this.http.post<Book>(this.baseApiUrl + '/api/book',
    addBookRequest);
  }

  getBook(id: string):Observable<Book> {
    return this.http.get<Book>(this.baseApiUrl + '/api/book/' + id)
  }

  updateBook(id: number, updateBookRequest: Book): Observable<Book> {
    return this.http.put<Book>(this.baseApiUrl + '/api/book/' + id, updateBookRequest);
  }

  deleteBook(id: number): Observable<Book> {
    return this.http.delete<Book>(this.baseApiUrl + '/api/book/' + id);
  }
}
