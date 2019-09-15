import { Component, OnInit } from '@angular/core';
import {OrderDetailService} from '../../services/orderdetail/orderdetail.service';
import {OrderDetail} from '../../models/OrderDetail';

@Component({
  selector: 'app-orderdetail',
  templateUrl: './orderdetail.component.html',
  styleUrls: ['./orderdetail.component.scss']
})
export class OrderdetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
