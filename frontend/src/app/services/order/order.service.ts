import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Order} from '../../models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url = 'http://localhost:8080/orders';

  constructor(private http: HttpClient) { }

  getOrders(): Promise<Order[]> {
    return this.http.get<Order[]>(this.url).toPromise();
  }
}
