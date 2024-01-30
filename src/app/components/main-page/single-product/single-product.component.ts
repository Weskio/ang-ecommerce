import { Component, Input, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgIf } from '@angular/common';
import { CartComponent } from '../cart/cart.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../interfaces/product';
import { CartServiceService } from '../../../services/cart-service.service';

@Component({
  selector: 'app-single-product',
  standalone: true,
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css',
  imports: [HeaderComponent, NgIf, CartComponent, RouterLink],
})
export class SingleProductComponent {
  @Input() totalItemCount: number = 0;
  product?: Product;
  quantity: number = 1; // Initial quantity
  isCartShown?: boolean

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartServiceService
  ) {}

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.params['id']);
    this.product = this.productService.getProductsById(productId);
  }

  addItem() {
    // Increase quantity
    this.quantity++;
  }

  removeItem() {
    // Decrease quantity, ensure minimum is 1
    this.quantity = Math.max(this.quantity - 1, 1);
  }

  addToCart() {
    // Add product with selected quantity to cart
    if (this.product) {
      for (let i = 0; i < this.quantity; i++) {
        this.cartService.addToCart(this.product);
      }
    }

    this.quantity=0
  }

  showCart() {
    this.isCartShown = !this.isCartShown;
  }

  
}
