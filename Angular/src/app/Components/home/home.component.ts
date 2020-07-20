
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, FormArray } from "@angular/forms";
import { Validators } from '@angular/forms';
import { IButton } from 'selenium-webdriver';
import { FieldOfItem } from '../../Classes/field-of-item';
import { ItemService } from '../../Services/item.service';
import { FieldOfItemInStock } from '../../Classes/field-of-item-in-stock';
import { Item } from '../../Classes/item';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { ItemInStockName } from 'src/app/Classes/item-in-stock-name';
import { mergeMap } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'materialApp';
  constructor(private fb: FormBuilder, private itemService: ItemService) { }

  // item: Item;
  item:Item;
  itemName: string = '';
  sendItemName: string;
  regiForm: FormGroup;
  isCorected: boolean = false;
  isFaundItem: boolean = false;
  fieldList: string = '';
  soughtItemList: string = '';
  itemInStockBuyingNameList: Array<ItemInStockName>;
  // itemInStockSellingNameList: Array<ItemInStockName>;



  ngOnInit() {
    this.regiForm = this.fb.group(
      {
        itemName: [null, Validators.required],
        fieldList: [null],
        soughtItemList: [null]
      });
  }

 
  next() {
    this.itemService.getItemByItemName(this.regiForm.get("itemName").value).subscribe
    (
    data => {
      this.item = data;
      this.isFaundItem = true;
    },
    error => {
      alert(error.message);
    }
  );  
  //  this.next1();
}
//   next1()
//   {
//     if(this.item!=null)
//     {
//     this.itemService.getItemInStockBuyingNameListByItemId(this.item.ItemId).subscribe(
//       data => {
//         this.itemInStockBuyingNameList = data;
        
//       },
//       error => {
//         alert(error.message);
//       }
//     );
//   }
//   // this.next2();
// }

  
  // next2()
  // {
  //   if(this.item!=null)
  //   {
  //   this.itemService.getItemInStockSellingNameListByItemId(this.item.ItemId).subscribe(
  //     data => {
  //       this.itemInStockSellingNameList = data;
        
  //     },
  //     error => {
  //       alert(error.message);
  //     }
  //   );
  // }
// }
 

  onFormSubmit(form: NgForm)
  {
    console.log(form);
  }
}

