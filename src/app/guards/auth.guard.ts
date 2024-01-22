import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const userToken = this.authService.getUserToken();

    if (userToken) {
      // User is authenticated
      return true;
    } else {
      // User is not authenticated, navigate to the login page
      this.router.navigate(['login']);
      return false;
    }
  }
}