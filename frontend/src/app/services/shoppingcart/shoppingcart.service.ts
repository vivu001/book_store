import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ShoppingCart} from '../../models/ShoppingCart';
import {BookService} from '../bookservice/book.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingcartService {
  cartUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient) {
  }

  getCarts(): Promise<ShoppingCart[]> {
    return this.http.get<ShoppingCart[]>(`${this.cartUrl}/carts`).toPromise();
  }

  postCart(userId: number, bookId: number, quantity: number): Promise<ShoppingCart> {
    const postUrl = `${this.cartUrl}/${userId}/carts/books/${bookId}/${quantity}`;
    return this.http.post<ShoppingCart>(postUrl, {userId, bookId, quantity}).toPromise();
  }
}
