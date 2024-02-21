import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { DashFrameworkComponent } from '../dash-framework/dash-framework.component';
import { Product } from '../../../interfaces/product';
import { ProductService } from '../../../services/product.service';
import { NgFor, NgIf, NgClass } from '@angular/common';
import {
  FormsModule,
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { AddProductModalComponent } from "../../../modals_dir/add-product-modal/add-product-modal.component";
//import { ProductCommunicationService } from '../../../services/product-communication.service';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [
        DashFrameworkComponent,
        NgFor,
        FormsModule,
        ReactiveFormsModule,
        NgIf,
        NgClass,
        AddProductModalComponent
    ]
})
export class HomeComponent{
  userName: string | undefined;
  email: string | undefined;
  productCommunicationService: any;
  isModalClicked: boolean = false
  imageUrl: any;
  myProducts: Product[] =[]

  constructor(
    private router: Router,
    private authService: AuthService,
    private product: ProductService,
  ) {}


  // addForm: FormGroup = this.fb.group({
  //   title: ['', Validators.required],
  //   description: [''],
  //   imageFile: [null],
  //   price: [0, Validators.required],
  //   category: ['', Validators.required],
  // });
  // addProduct() {
  //   const newProduct: Product = this.addForm.value;
  //   this.product.addProduct(newProduct);
  //   this.addForm.reset();
  // }
  

  logout() {
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

  ngOnInit(): void {
    const userData = this.authService.getUserData();
    if (userData) {
      this.userName = userData.name;
      this.email = userData.email;
    }
    
    this.myProducts = this.product.getProducts();
  }

  modalToggle(){
    this.isModalClicked = !this.isModalClicked
  }
}
