import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartComponent } from "../cart/cart.component";
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [CartComponent, NgIf]
})
export class HeaderComponent {

  @Input() showCartButton: boolean = true;

  isCartShown = false;
  
  showCart() {
    this.isCartShown = !this.isCartShown;
  }
}
