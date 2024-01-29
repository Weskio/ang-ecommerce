import { Component } from '@angular/core';
import { CartServiceService } from '../../../services/cart-service.service';
import { Product } from '../../../interfaces/product';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [NgFor],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  isCartShown = false;
  items: Product[] = [];
  total: number = 0;

  constructor(private cartService: CartServiceService){}

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.total = this.cartService.getTotalPrice();
  }

  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product);
    this.items = this.cartService.getItems(); // Update items after removal
    this.total = this.cartService.getTotalPrice(); // Update total after removal
  }

}
