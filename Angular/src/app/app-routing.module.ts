import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { SoughtItemListComponent } from './Components/sought-item-list/sought-item-list.component';
import { SaleComponent } from './Components/sale/sale.component';
import { BuyComponent } from './Components/buy/buy.component';
import { NotFoundComponent } from 'src/app/Components/not-found/not-found.component';
import { NewUserComponent } from 'src/app/Components/new-user/new-user.component';
import { LoginComponent } from 'src/app/Components/login/login.component';


const routes: Routes = 
[
  {path: '',component:HomeComponent },
  {path: '',redirectTo: '/home', pathMatch: 'full' },
  {path:'Buying',component:BuyComponent},
  {path:'Selling',component:SaleComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
