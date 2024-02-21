import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { AuthService } from '../../../services/auth.service';
import { DashFrameworkComponent } from '../dash-framework/dash-framework.component';
import { ModalsComponent } from '../modals/modals.component';
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
    NgClass
  ],
})
export class HomeComponent{
  userName: string | undefined;
  email: string | undefined;
  productCommunicationService: any;
  isModalClicked: boolean = false
  
  imageUrl: any;
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

  ngAfterViewInit(): void {
    // Initialize Flowbite after the view has been initialized
    initFlowbite();
  }

  addForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    description: [''],
    imageFile: [null],
    price: [0, Validators.required],
    category: ['', Validators.required],
  });
  
  myProducts: Product[] = this.product.getProducts();

  onSelectedFile(e: any) {
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.imageUrl = event.target.result;
      };
    }
  }
  
  addProduct() {
    const newProduct: Product = this.addForm.value;
    this.product.addProduct(newProduct);
    this.addForm.reset();
  }
  

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
  }

  modalToggle(){
    this.isModalClicked = !this.isModalClicked
  }
}
