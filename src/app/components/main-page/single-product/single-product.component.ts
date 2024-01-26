import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { NgIf } from '@angular/common';
import { CartComponent } from "../cart/cart.component";

@Component({
    selector: 'app-single-product',
    standalone: true,
    templateUrl: './single-product.component.html',
    styleUrl: './single-product.component.css',
    imports: [HeaderComponent, NgIf, CartComponent]
})
export class SingleProductComponent {

    i:number =0;
    isCartShown= false

    addItem(){
        this.i++;
    }

    removeItem() {
        this.i = this.i === 0 ? 0 : this.i - 1;
    }

    showCart(){
        this.isCartShown = !this.isCartShown
    }
    

}
