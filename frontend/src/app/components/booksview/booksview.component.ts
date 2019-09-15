import {Component, OnInit} from '@angular/core';
import {BookService} from '../../services/bookservice/book.service';
import {Book} from '../../models/Book';
import {ShoppingcartService} from '../../services/shoppingcart/shoppingcart.service';

@Component({
  selector: 'app-booksview',
  templateUrl: './booksview.component.html',
  styleUrls: ['./booksview.component.scss']
})
export class BooksviewComponent implements OnInit {
  books: Book[];
  pageOfBooks: Array<any>;

  constructor(private bookService: BookService, private shoppingCartService: ShoppingcartService) {
  }

  async ngOnInit() {
    this.books = await this.bookService.getBooks();
  }

  addToCart(event) {
    this.shoppingCartService.postCart(1, event.book.id, event.quantity);
  }

  onChangePage(pageOfBooks: Array<any>) {
    // update current page of items
    this.pageOfBooks = pageOfBooks;
  }
}
