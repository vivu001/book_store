import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {OrderDetail} from '../../models/OrderDetail';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {
  url = 'http://localhost:8080/orderDetails';

  constructor(private http: HttpClient) { }

  getOrderDetails(): Promise<OrderDetail[]> {
    return this.http.get<OrderDetail[]>(this.url).toPromise();
  }
}
