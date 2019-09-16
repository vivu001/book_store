import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from '../../../models/Book';

@Component({
  selector: 'app-bookcard',
  templateUrl: './bookcard.component.html',
  styleUrls: ['./bookcard.component.scss']
})
export class BookcardComponent implements OnInit {
  @Input()
  book: Book;
  @Output()
  addToCartEmitter = new EventEmitter();
  @Output()
  quantity: number;

  constructor() {
  }

  ngOnInit() {
  }

  onAddToCart(book, quantity) {
    if (quantity === undefined) {
      quantity = 1;
      // throw new Error('Quantity is required');
    }
    this.addToCartEmitter.emit({book, quantity});
  }
}
