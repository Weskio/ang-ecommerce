import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

items: Product[] = [];

  constructor() {}

  addToCart(product: Product, quantity: number) {
    const existingProductIndex = this.items.findIndex(item => item.id === product.id);
  
    if (existingProductIndex !== -1) {
      const existingProduct = this.items[existingProductIndex];
      if (existingProduct.quantity !== undefined) {
        existingProduct.quantity += quantity;
      } else {
        existingProduct.quantity = quantity;
      }
      this.items[existingProductIndex] = existingProduct;
    } else {
      const productToAdd = { ...product, quantity };
      this.items.push(productToAdd);
    }
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

  ngOnInit(){
    
  }

  getTotalItemCount():number{
    return this.items.length
  }
  
}
