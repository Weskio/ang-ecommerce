import {NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartServiceService } from '../../../services/cart-service.service';
import { Product } from '../../../interfaces/product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  @Input() quantity: number = 1;
  @Output() closeCart: EventEmitter<void> = new EventEmitter<void>();
  isCartShown = false;
  items: Product[] = [];
  total: number = 0;

  showCart() {
    this.isCartShown = !this.isCartShown;
  }

  onCloseCart() {
    this.isCartShown = false;
    this.closeCart.emit();
  }

  constructor(private cartService: CartServiceService){}

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.total = this.cartService.getTotalPrice();
  }

  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product);
    this.items = this.cartService.getItems();
    this.total = this.cartService.getTotalPrice();
  }

  

}
