import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {LoginComponent} from './pages/login/login.component';
import {OrderdetailComponent} from './pages/orderdetail/orderdetail.component';
import {ShoppingcartComponent} from './pages/shoppingcart/shoppingcart.component';
import {OrderComponent} from './pages/order/order.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'order', component: OrderComponent},
  {path: 'orderdetail', component: OrderdetailComponent},
  {path: 'shoppingcart', component: ShoppingcartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
