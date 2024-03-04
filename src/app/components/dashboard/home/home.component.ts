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
import { DeleteProductModalComponent } from "../../../modals_dir/delete-product-modal/delete-product-modal.component";
import { EditProductModalComponent } from "../../../modals_dir/edit-product-modal/edit-product-modal.component";
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
        AddProductModalComponent,
        DeleteProductModalComponent,
        EditProductModalComponent
    ]
})
export class HomeComponent{
  userName: string | undefined;
  email: string | undefined;
  productCommunicationService: any;
  isModalClicked: boolean = false
  imageUrl: any;
  myProducts: Product[] =[]
  addProduct!: boolean;
  deleteProduct!: boolean;
  editProduct!: boolean;
  product!: Product

  constructor(
    private router: Router,
    private authService: AuthService,
    private productService: ProductService,
  ) {}

  productId: number = 0

  deleteProductModal(productId: number) {
    this.productId = productId; // Set the productId property
    this.deleteProduct = true; // Open the delete product modal
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
    this.productService.ngOnInit()
    const userData = this.authService.getUserData();
    if (userData) {
      this.userName = userData.name;
      this.email = userData.email;
    }
    
    this.myProducts = this.productService.getProducts();
    //console.log(this.myProducts)
    
    // this.myProducts.forEach(item => {
    //   this.productId = item.id 
    //   return this.productId
    // })

    this.myProducts = this.productService.getProducts();
    if (this.myProducts.length > 0) {
        this.productId = this.myProducts[this.myProducts.length - 1].id;
    }

  }

  modalToggle(modalType: string, productId: number, Product: Product) {
    if (modalType === 'addProduct') {
      this.addProduct = !this.addProduct;
    } else if (modalType === 'deleteProduct') {
      this.deleteProduct = !this.deleteProduct;
     this.productId = productId;
     //console.log(productId)
    }
    else if(modalType === 'editProduct'){
      this.editProduct = !this.editProduct;
      this.product = Product
      this.productId = this.product.id
      //console.log(Product)
    }
  }


  
}
