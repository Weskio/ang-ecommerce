import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgIf } from '@angular/common';
import { CartComponent } from '../cart/cart.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../interfaces/product';

@Component({
  selector: 'app-single-product',
  standalone: true,
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css',
  imports: [HeaderComponent, NgIf, CartComponent, RouterLink],
})
export class SingleProductComponent {
  i: number = 0;
  isCartShown = false;
  productService = inject(ProductService);
  products?: Product;
  productId?: number;

  addItem() {
    this.i++;
  }

  removeItem() {
    this.i = this.i === 0 ? 0 : this.i - 1;
  }

  showCart() {
    this.isCartShown = !this.isCartShown;
  }

  route = inject(ActivatedRoute);

  constructor() {
    const productId = Number(this.route.snapshot.params['id']);
    this.products = this.productService.getProductsById(productId);
  }
}
