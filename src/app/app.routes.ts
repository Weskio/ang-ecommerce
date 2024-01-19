import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/dashboard/home/home.component';

export const routes: Routes = [
    {path:'', component:LoginComponent},
    {path:'signup', component:RegisterComponent},
    {path:'home', component:HomeComponent}
];
