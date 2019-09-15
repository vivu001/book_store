import { Component, OnInit } from '@angular/core';
import {OrderDetailService} from '../../services/orderdetail/orderdetail.service';
import {OrderDetail} from '../../models/OrderDetail';

@Component({
  selector: 'app-orderdetailtable',
  templateUrl: './orderdetailtable.component.html',
  styleUrls: ['./orderdetailtable.component.scss']
})
export class OrderdetailtableComponent implements OnInit {
  orderDetails: OrderDetail[];

  constructor(private orderDetailService: OrderDetailService) { }

  async ngOnInit() {
    this.orderDetails = await this.orderDetailService.getOrderDetails();
  }
}
