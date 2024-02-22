import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../interfaces/product';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-all-products',
  standalone: true,
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css',
  imports: [
    HeaderComponent,
    FooterComponent,
    NgFor,
    RouterLink,
    NgxPaginationModule,
  ],
})
export class AllProductsComponent {
  p: number = 1;

  products: Product[] = []

  constructor(private productService: ProductService) {}

  ngOnInit(){
    this.productService.ngOnInit()
    this.products = this.productService.getProducts();
  }

  

}
