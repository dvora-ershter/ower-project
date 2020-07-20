import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {  MatPaginatorModule} from '@angular/material/paginator';
import  {MatSortModule } from '@angular/material/sort';
import  {MatGridListModule } from '@angular/material/grid-list';
import  {MatSlideToggleModule } from '@angular/material/slide-toggle';
import {ErrorStateMatcher} from '@angular/material/core';
import  {ShowOnDirtyErrorStateMatcher } from  '@angular/material/core';
import  {MatTableModule } from '@angular/material/table';

//  import {MatOptionModule} from '@angular/material/select';
// import {      
  // MatButtonModule,      
  // MatMenuModule,      
  // MatToolbarModule,      
  // MatIconModule,      
  // MatCardModule,      
  // MatFormFieldModule,      
  // MatInputModule,      
  // MatDatepickerModule,      
  // MatDatepicker,      
  // MatNativeDateModule,      
  // MatRadioModule,      
  // MatSelectModule,      
  // MatOptionModule,   
  // MatPaginatorModule,
  // MatSortModule,
  // // MatGridListModule,
  // MatSlideToggleModule,ErrorStateMatcher,ShowOnDirtyErrorStateMatcher, MatTableModule      
// } from '@angular/material';       

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyFormComponent } from './Components/my-form/my-form.component';
import { SaleComponent } from './Components/sale/sale.component';
import { HomeComponent } from './Components/home/home.component';
import { AllItemsComponent } from './Components/all-items/all-items.component';
import { ItemComponent } from './Components/item/item.component';
import { BuyComponent } from './Components/buy/buy.component';
import { FieldsComponent } from './Components/fields/fields.component';
import {HttpClientModule} from '@angular/common/http';
import { SoughtItemListComponent } from './Components/sought-item-list/sought-item-list.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { NewUserComponent } from './Components/new-user/new-user.component';
import { LoginComponent } from './Components/login/login.component';
import { ItemInStockComponent } from './Components/item-in-stock/item-in-stock.component'


@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    SaleComponent,
    HomeComponent,
    AllItemsComponent,
    ItemComponent,
    BuyComponent,
    FieldsComponent,
    SoughtItemListComponent,
    UserDetailsComponent,
    NotFoundComponent,
    NewUserComponent,
    LoginComponent,
    ItemInStockComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,      
    FormsModule,      
    ReactiveFormsModule,      
    MatButtonModule,      
    MatMenuModule,      
    MatToolbarModule,      
    MatIconModule,      
    MatCardModule,      
    BrowserAnimationsModule,      
    MatFormFieldModule,      
    MatInputModule,      
    MatDatepickerModule,      
    MatNativeDateModule,      
    MatRadioModule,      
    MatSelectModule,      
    // MatOptionModule,      
    MatSlideToggleModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    HttpClientModule
   
  ],
  providers: [{provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}],
  bootstrap: [AppComponent]
})
export class AppModule { }
