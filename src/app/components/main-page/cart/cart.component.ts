import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgIf],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  i:number =0;
  isCartShown= false

  showCart(){
      this.isCartShown = !this.isCartShown
  }

}
