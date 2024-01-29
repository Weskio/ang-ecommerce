import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

items: Product[] = [];

  constructor() {}

  addToCart(product: Product) {
    this.items.push(product);
  }

  removeFromCart(product: Product) {
    const index = this.items.findIndex(item => item === product);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
  

  getItems(): Product[] {
    return this.items;
  }

  getTotalPrice(): number {
    const totalPrice = this.items.reduce((acc, item) => acc + item.price, 0);
    return parseFloat(totalPrice.toFixed(2));
  }
  
}
