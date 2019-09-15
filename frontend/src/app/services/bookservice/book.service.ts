import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Book} from '../../models/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  booksUrl = 'http://localhost:8080/books';

  constructor(private http: HttpClient) {}

  getBooks(): Promise<Book[]> {
    return this.http.get<Book[]>(this.booksUrl).toPromise();
  }
}
