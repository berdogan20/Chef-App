import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';
import { CategoriesComponent } from './menu/categories/categories.component';
import { FoodListComponent } from './menu/food-list/food-list.component';
import { FoodItemComponent } from './menu/food-list/food-item/food-item.component';
import { BasketComponent } from './basket/basket.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { OrdersComponent } from './admin-profile/orders/orders.component';
import { OrderComponent } from './admin-profile/orders/order/order.component';
import { OrderDetailComponent } from './admin-profile/orders/order-detail/order-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    SignInComponent,
    RegisterComponent,
    CategoriesComponent,
    FoodListComponent,
    FoodItemComponent,
    BasketComponent,
    UserProfileComponent,
    AdminProfileComponent,
    OrdersComponent,
    OrderComponent,
    OrderDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
