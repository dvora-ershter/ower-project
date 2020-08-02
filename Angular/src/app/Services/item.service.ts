import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FieldOfItem } from '../Classes/field-of-item';
import { Item } from '../Classes/item';
import { FieldOfItemInStock } from '../Classes/field-of-item-in-stock';
import { ItemInStock } from '../Classes/item-in-stock';
import { ItemInStockName } from '../Classes/item-in-stock-name';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http:HttpClient) { }

  baseURL = "https://localhost:44322/";
.0

 

getFieldListByItemId(itemId:number):Observable<FieldOfItem[]>
  {
      return this.http.get<FieldOfItem[]>(this.baseURL + "api/DescriptionOfItem/GetDescriptionOfItemListByItemId?itemId="+itemId);
  }


  addFields(NewFieldList:FieldOfItem[]):Observable<number[]>
  {
      return this.http.post<number[]>(this.baseURL + "api/DescriptionOfItem/AddDescriptinOfItemList", NewFieldList);
  }

  addValues(NewValues:FieldOfItemInStock[]):void
  {
      this.http.post(this.baseURL + "api/DescreptionOfItemInStockController/AddDiscreptionOfItemInStock", NewValues)
  }
 
  getItemByItemName(itemName:string):Observable<Item>
  {
      return this.http.get<Item>(this.baseURL + "api/Item/GetItemByItemName/{itemName}?itemName="+itemName);
  }

  getItemInStockBuyingNameListByItemId(itemId:number):Observable<ItemInStockName[]>
  {
      return this.http.get<ItemInStockName[]>(this.baseURL + "api/DescriptionOfItemInStock/GetItemInStockBuyingNameListByItemId?itemId="+itemId+"?buying=1");
  }

  getItemInStockSellingNameListByItemId(itemId:number):Observable<ItemInStockName[]>
  {
      return this.http.get<ItemInStockName[]>(this.baseURL + "api/DescriptionOfItemInStock/GetItemInStockSellingNameListByItemId?itemId="+itemId+"?buying=0");
  }

  getItemInStockDetailsByItemInStockId(itemInStockId:number):Observable<ItemInStock>
  {
      return this.http.get<ItemInStock>(this.baseURL + "api/DescriptionOfItemInStock/GetAllDetailsOfItemInStockByItemInStockId?ItemInStockId="+itemInStockId);
  }

}
