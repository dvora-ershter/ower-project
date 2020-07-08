import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FieldOfItem } from 'src/app/Classes/field-of-item';
import { Item } from '../../Classes/item';
import { FieldOfItemInStock } from 'src/app/Classes/field-of-item-in-stock';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemService } from 'src/app/Services/item.service';
import { NgModule } from '@angular/core';
import { ItemInStockName } from 'src/app/Classes/item-in-stock-name';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.css']
})
export class FieldsComponent implements OnInit {
  constructor(private fb: FormBuilder, private itemService: ItemService) {

  }
  fieldsForm: FormGroup;
  fields: Array<FieldOfItem>;
  newFields: Array<FieldOfItem>;      
  values: Array<FieldOfItemInStock>; 
  newField: FieldOfItem; 
  value: FieldOfItemInStock;
  fieldIdList: number[];
  index: number;  
  @Input() item: Item;
  @Input() itemInStockNameList: Array<ItemInStockName>;

  ngOnInit() {
    this.fields = new Array<FieldOfItem>()
    this.values = new Array<FieldOfItemInStock>()

    this.itemService.getFieldListByItemId(this.item.ItemId).subscribe(
      data => {
        this.fields = data;
      },
      error => {
        alert(error.message);
      }
    );

    this.fieldsForm = this.fb.group(
      {
        value: [],
        field: [],
        newField:[],
        newValue: []
      });

  }
  add() {
     this.newField = new FieldOfItem(0,"",0);
     this.newFields.push(this.newField);

     this.value = new FieldOfItemInStock("",0,0);
     this.values.push(this.value);
  }

  ok() {
                  
    // this.itemService.addFields(this.newFields).subscribe(
    //   data => {
    //     this.fieldIdList = data;
    //   },
    //   error => {
    //     alert(error.message);
    //   }
    // );
    
    // this.itemService.addValues(this.values);
  }


}
