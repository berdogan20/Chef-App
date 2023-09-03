import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { BasketComponent } from './basket/basket.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent},
  { path: 'sign-in', component: SignInComponent, children: [
    {path: 'register', redirectTo: 'register'},
    {path: 'menu', redirectTo: 'menu'},
  ]},
  { path: 'register', component: RegisterComponent, children: [
    {path: 'menu', redirectTo: 'menu'}
  ]},
  { path: 'user-profile', component: UserProfileComponent},
  { path: 'basket', component: BasketComponent},
  { path: 'admin', component: AdminProfileComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
