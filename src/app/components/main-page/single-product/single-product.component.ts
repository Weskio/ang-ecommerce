import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-single-product',
    standalone: true,
    templateUrl: './single-product.component.html',
    styleUrl: './single-product.component.css',
    imports: [HeaderComponent]
})
export class SingleProductComponent {

    i:number =0;

    addItem(){
        this.i++;
    }

    removeItem() {
        this.i = this.i === 0 ? 0 : this.i - 1;
    }
    

}
