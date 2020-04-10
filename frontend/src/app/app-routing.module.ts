import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './containers/user/login/login.component';
import { RegisterComponent } from './containers/user/register/register.component';
import { HomeComponent } from './containers/home/home.component';
import { SearchProductsComponent } from './containers/search-products/search-products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ConfirmedComponent } from './containers/user/confirmed/confirmed.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'products/search/:searchValue', component: SearchProductsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user/confirmado/:token', component: ConfirmedComponent },
  { path: 'product/:id', component: ProductDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
