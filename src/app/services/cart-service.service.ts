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
    this.items = this.items.filter(item => item !== product);
  }

  getItems(): Product[] {
    return this.items;
  }

  getTotalPrice(): number {
    return this.items.reduce((acc, item) => acc + item.price, 0);
  }
}
