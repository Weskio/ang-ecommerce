import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../interfaces/product';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-all-products',
    standalone: true,
    templateUrl: './all-products.component.html',
    styleUrl: './all-products.component.css',
    imports: [HeaderComponent, FooterComponent,NgFor]
})
export class AllProductsComponent {

    constructor(
        private productService: ProductService
    ) { }

    products: Product[]= this.productService.getProducts();

}
