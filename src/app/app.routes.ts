import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/dashboard/home/home.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path:'', component:LoginComponent},
    {path:'signup', component:RegisterComponent},
    {path:'home', component:HomeComponent, canActivate: [AuthGuard]}
];
