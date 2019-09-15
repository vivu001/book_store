import {Component, OnInit} from '@angular/core';
import {Order} from '../../models/Order';
import {OrderService} from '../../services/order/order.service';

@Component({
  selector: 'app-ordertable',
  templateUrl: './ordertable.component.html',
  styleUrls: ['./ordertable.component.scss']
})
export class OrdertableComponent implements OnInit {
  orders: Order[];

  constructor(private orderService: OrderService) {
  }

  async ngOnInit() {
    this.orders = await this.orderService.getOrders();
  }

}
