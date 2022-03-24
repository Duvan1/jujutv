import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit {
  @Input()
  pagesRes!: number;
  @Output()
  pageAction: EventEmitter<number> = new EventEmitter();

  public pages: number[] = [];

  constructor() {}

  ngOnInit(): void {
    this.pages = new Array<number>(this.pagesRes);
  }

  paginate(index: number) {
    this.pageAction.emit(index);
  }
}
