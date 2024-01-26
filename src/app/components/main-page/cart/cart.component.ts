import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgIf],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  i:number =0;
  @Output() closeCart: EventEmitter<void> = new EventEmitter<void>();
  isCartShown = false;

  showCart() {
    this.isCartShown = !this.isCartShown;
  }

  onCloseCart() {
    this.isCartShown = false;
    this.closeCart.emit();
  }

}
