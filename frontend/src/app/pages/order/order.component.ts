import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../services/order/order.service';
import {Order} from '../../models/Order';
import {Router} from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  buy() {
    this.router.navigate(['orderdetail']);
  }
}
