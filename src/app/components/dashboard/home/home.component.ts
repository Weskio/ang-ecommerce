import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { AuthService } from '../../../services/auth.service';
import { DashFrameworkComponent } from '../dash-framework/dash-framework.component';
import { ModalsComponent } from '../modals/modals.component';
import { Product } from '../../../interfaces/product';
import { ProductService } from '../../../services/product.service';
import { NgFor, NgIf } from '@angular/common';
import {
  FormsModule,
  NgModel,
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { title } from 'process';
//import { ProductCommunicationService } from '../../../services/product-communication.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [
    DashFrameworkComponent,
    ModalsComponent,
    NgFor,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
  ],
})
export class HomeComponent {
  userName: string | undefined;
  email: string | undefined;
  productCommunicationService: any;
  // addForm: any= {
  //   name: "",
  //   desc: "",
  //   image: "",
  //   price: 0,
  //   category: ""
  // }

  constructor(
    private router: Router,
    private authService: AuthService,
    private product: ProductService,
    private fb: FormBuilder
  ) {}

  addForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    description: [''],
    imageFile: [null],
    price: [0, Validators.required],
    category: ['', Validators.required],
  });
  
  myProducts: Product[] = this.product.getProducts();
  
  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.addForm.patchValue({ imageFile: file });
    }
  }
  
  getImagePreview(file: File): string {
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.addForm.patchValue({ image: reader.result });
      };
      return this.addForm.get('image')?.value;
    }
    return ''; // or a default URL for no image
  }
  
  addProduct() {
    const newProduct: Product = this.addForm.value;
    this.myProducts.push(newProduct);
    this.addForm.reset();
  }
  

  logout() {
    this.authService.logout().subscribe(
      () => {
        // Successful logout, navigate to the login page
        this.router.navigate(['login']);
      },
      (error: any) => {
        console.error('Logout error:', error);
        // Navigate to the login page even if there's an error
        this.router.navigate(['login']);
      }
    );
  }

  ngOnInit(): void {
    initFlowbite();
    const userData = this.authService.getUserData();
    if (userData) {
      this.userName = userData.name;
      this.email = userData.email;
    }

    //   this.productCommunicationService.productAdded.subscribe((newProduct: Product) => {
    //     this.myProducts.push(newProduct);

    // });
  }
}
