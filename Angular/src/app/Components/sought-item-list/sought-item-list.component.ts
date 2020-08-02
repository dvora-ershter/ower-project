import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../Classes/item';
import { ItemInStockName } from 'src/app/Classes/item-in-stock-name';

@Component({
  selector: 'app-sought-item-list',
  templateUrl: './sought-item-list.component.html',
  styleUrls: ['./sought-item-list.component.css']
})
export class SoughtItemListComponent implements OnInit {
  @Input() item: Item;
  @Input() itemInStockNameList: Array<ItemInStockName>;
  @Output() chooseItem:EventEmitter<number>=new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
    console.log(this.item);
  }

}
