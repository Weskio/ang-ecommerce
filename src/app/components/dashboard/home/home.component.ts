import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { AuthService } from '../../../services/auth.service';
import { DashFrameworkComponent } from "../dash-framework/dash-framework.component";
import { ModalsComponent } from "../modals/modals.component";
import { Product } from '../../../interfaces/product';
import { ProductService } from '../../../services/product.service';
import { NgFor } from '@angular/common';
import { FormsModule, NgModel, FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
//import { ProductCommunicationService } from '../../../services/product-communication.service';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [DashFrameworkComponent, ModalsComponent, NgFor, FormsModule, ReactiveFormsModule]
})
export class HomeComponent {

  userName: string | undefined;
  email :string |undefined;
  productCommunicationService: any;
// addForm: any= {
//   name: "",
//   desc: "",
//   image: "",
//   price: 0,
//   category: ""
// }

  constructor(private router: Router, private authService: AuthService , private product:ProductService, private fb: FormBuilder) {
   }

   addForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    desc: [''],
    image: [''],
    price: [0, Validators.required],
    category: ['', Validators.required]
  });
  

  myProducts: Product[] = this.product.getProducts();

  addProduct() {
    const newProduct: Product = this.addForm.value;
    this.myProducts.push(newProduct);
    // You may also want to reset the form after submitting
    this.addForm.reset();
  }
  


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

  //   this.productCommunicationService.productAdded.subscribe((newProduct: Product) => {
  //     this.myProducts.push(newProduct);

  // });
  }

}
