import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ItemService } from '../../Services/item.service';
import { Item } from '../../Classes/item';
import { ItemInStockName } from 'src/app/Classes/item-in-stock-name';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  constructor(private fb: FormBuilder, private itemService: ItemService) { }

  @Input()itemInStockNameList: Array<ItemInStockName>;
  regiForm: FormGroup;
  @Input() item: Item;
  ngOnInit() {


  }

}
