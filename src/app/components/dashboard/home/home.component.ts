import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { AuthService } from '../../../services/auth.service';
import { DashFrameworkComponent } from "../dash-framework/dash-framework.component";
import { ModalsComponent } from "../modals/modals.component";
import { Product } from '../../../interfaces/product';
import { ProductService } from '../../../services/product.service';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [DashFrameworkComponent, ModalsComponent, NgFor]
})
export class HomeComponent {

  userName: string | undefined;
  email :string |undefined;
  //products: Product | undefined



  constructor(private router: Router, private authService: AuthService , private product:ProductService) {
    this.myProducts = this.product.getProducts();
    console.log(this.myProducts); 
   }

  myProducts: Product[] = this.product.getProducts();

  logout() {
    this.authService.logout().subscribe(
      () => {
        // Successful logout, navigate to the login page
        this.router.navigate(['']);
      },
      (error: any) => {
        console.error('Logout error:', error);
        // Navigate to the login page even if there's an error
        this.router.navigate(['']);
      }
    );
  }

  ngOnInit(): void {
    initFlowbite();
    const userData = this.authService.getUserData();
    if (userData) {
      this.userName = userData.name;
      this.email = userData.email
    }
  }

}
