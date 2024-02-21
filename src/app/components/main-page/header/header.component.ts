import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { CartComponent } from "../cart/cart.component";
import { NgIf } from '@angular/common';
import { CartServiceService } from '../../../services/cart-service.service';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [CartComponent, NgIf]
})
export class HeaderComponent {

  @Input() showCartButton: boolean = true;

  isCartShown = false;
  userName: string | undefined;
  email :string |undefined;
  
  showCart() {
    this.isCartShown = !this.isCartShown;
  }

  totalItemCount: number = 0;

  constructor(private cartService:CartServiceService, private cdr: ChangeDetectorRef, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.updateTotalItemCount();
    const userData = this.authService.getUserData();
    if (userData) {
      this.userName = userData.name;
      this.email = userData.email
    }
  }

  logout() {
    console.log('Logged out')
    this.authService.logout().subscribe(
      () => {
        this.router.navigate(['login']);
      },
      (error: any) => {
        console.error('Logout error:', error);
        this.router.navigate(['login']);
      }
    );
  }

  updateTotalItemCount(): void {
    this.totalItemCount = this.cartService.getTotalItemCount();
    this.cdr.detectChanges();
  }
}
