import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

items: Product[] = [];

  constructor() {}

  addToCart(product: Product, quantity: number) {
    // Check if the product is already in the cart
    const existingProductIndex = this.items.findIndex(item => item.id === product.id);
  
    if (existingProductIndex !== -1) {
      // If the product already exists in the cart
      const existingProduct = this.items[existingProductIndex];
      
      // If the quantity is defined, increase it by the specified quantity
      if (existingProduct.quantity !== undefined) {
        existingProduct.quantity += quantity;
      } else {
        // If the quantity is undefined, set it to the specified quantity
        existingProduct.quantity = quantity;
      }
  
      // Update the product in the cart
      this.items[existingProductIndex] = existingProduct;
    } else {
      // If the product does not exist, add a copy of it to the cart
      const productToAdd = { ...product, quantity }; // Create a deep copy with quantity
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
