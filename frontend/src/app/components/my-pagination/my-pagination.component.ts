import {Component, OnChanges, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import paginate = require('jw-paginate');

@Component({
  selector: 'app-my-pagination',
  templateUrl: './my-pagination.component.html',
  styleUrls: ['./my-pagination.component.scss']
})
export class MyPaginationComponent implements OnInit {
  @Input() items: Array<any>;
  @Output() changePage = new EventEmitter<any>(true);
  @Input() initialPage = 1;
  @Input() pageSize = 8;
  @Input() maxPages = 10;

  pager: any = {};

  constructor() { }

  ngOnInit() {
    if (this.items && this.items.length) {
      this.setPage(this.initialPage);
    }
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnChanges(changes: SimpleChanges) {
    // reset page if items array has changed
    if (changes.items.currentValue !== changes.items.previousValue) {
      this.setPage(this.initialPage);
    }
  }

  private setPage(page: number) {
    // get new pager object for specified page
    this.pager = paginate(this.items.length, page, this.pageSize, this.maxPages);

    // get new page of items from items array
    const pageOfItems = this.items.slice(this.pager.startIndex, this.pager.endIndex + 1);

    // call change page function in parent component
    this.changePage.emit(pageOfItems);
  }

}
