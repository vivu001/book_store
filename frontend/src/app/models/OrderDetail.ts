import {Order} from './Order';
import {Book} from './Book';

export class OrderDetail {
  id: number;
  order: Order;
  book: Book;
  quantity: number;
}
