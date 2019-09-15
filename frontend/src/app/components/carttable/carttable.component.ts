import {Component, OnInit} from '@angular/core';
import {ShoppingCart} from '../../models/ShoppingCart';
import {ShoppingcartService} from '../../services/shoppingcart/shoppingcart.service';
import {BookService} from '../../services/bookservice/book.service';

@Component({
  selector: 'app-carttable',
  templateUrl: './carttable.component.html',
  styleUrls: ['./carttable.component.scss']
})
export class CarttableComponent implements OnInit {
  shoppingCarts: ShoppingCart[];

  constructor(private shoppingCartService: ShoppingcartService) {
  }

  async ngOnInit() {
    this.shoppingCarts = await this.shoppingCartService.getCarts();
  }
}
