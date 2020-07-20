import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ItemService } from 'src/app/Services/item.service';
import { Item } from 'src/app/Classes/item';
import { ItemInStockName } from 'src/app/Classes/item-in-stock-name';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  @Output() chooseItem=new EventEmitter<number>();
  @Input() item:Item;
  itemInStockSellingNameList:ItemInStockName[];

  constructor(private itemService:ItemService) { }
  ngOnInit()
  {
    this.itemService.getItemInStockSellingNameListByItemId(this.item.ItemId).subscribe(
            data => {
              this.itemInStockSellingNameList = data;
              
            },
            error => {
              alert(error.message);
            }
          );
  }
  onChooseItem(itemId:number)
  {
    this.chooseItem.emit(itemId);
  } 

  // getSellingNameList()
  //   {
  //     this.itemService.getItemInStockSellingNameListByItemId(this.item.ItemId).subscribe(
  //       data => {
  //         this.itemInStockSellingNameList = data;
          
  //       },
  //       error => {
  //         alert(error.message);
  //       }
  //     );
  //   }
}
