import { Component, OnInit, Input } from '@angular/core';
import { ItemService } from 'src/app/Services/item.service';
import { ItemInStock } from 'src/app/Classes/item-in-stock';

@Component({
  selector: 'app-item-in-stock',
  templateUrl: './item-in-stock.component.html',
  styleUrls: ['./item-in-stock.component.css']
})
export class ItemInStockComponent implements OnInit {

  constructor(private itemService:ItemService) { }
  itemInStock:ItemInStock;

  ngOnInit(): void
  {
    this.itemService.getItemInStockDetailsByItemInStockId(this.itemInStockId).subscribe(
      data=>{
        this.itemInStock=data;
      },
      error=>{
        alert(error.message);
      }    
    );
  }

  @Input() itemInStockId:number; 
   
}
