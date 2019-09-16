import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { ComponentsComponent } from './components/components.component';
import { HomeComponent } from './pages/home/home.component';
import { ShoppingcartComponent } from './pages/shoppingcart/shoppingcart.component';
import { OrderComponent } from './pages/order/order.component';
import { OrderdetailComponent } from './pages/orderdetail/orderdetail.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BooksviewComponent } from './components/booksview/booksview.component';
import { AsideComponent } from './components/aside/aside.component';
import { BookcardComponent } from './components/booksview/bookcard/bookcard.component';
import {HttpClientModule} from '@angular/common/http';
import { CarttableComponent } from './components/carttable/carttable.component';
import { OrdertableComponent } from './components/ordertable/ordertable.component';
import { OrderdetailtableComponent } from './components/orderdetailtable/orderdetailtable.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JwPaginationComponent} from 'jw-angular-pagination';
import { MyPaginationComponent } from './components/my-pagination/my-pagination.component';
import { CategoryComponent } from './components/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    JwPaginationComponent,
    PagesComponent,
    ComponentsComponent,
    HomeComponent,
    ShoppingcartComponent,
    OrderComponent,
    OrderdetailComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    BooksviewComponent,
    AsideComponent,
    BookcardComponent,
    CarttableComponent,
    OrdertableComponent,
    OrderdetailtableComponent,
    MyPaginationComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
