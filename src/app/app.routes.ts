import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/dashboard/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { LandingComponent } from './components/main-page/landing/landing.component';
import { SingleProductComponent } from './components/main-page/single-product/single-product.component';
import { AllProductsComponent } from './components/main-page/all-products/all-products.component';
import { CheckoutComponent } from './components/main-page/checkout/checkout.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'single-product/:id', component: SingleProductComponent },
  { path: 'all-products', component: AllProductsComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
];
