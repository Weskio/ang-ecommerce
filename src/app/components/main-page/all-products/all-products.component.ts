import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../interfaces/product';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import {PageEvent, MatPaginatorModule} from '@angular/material/paginator';
import {JsonPipe} from '@angular/common';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
    selector: 'app-all-products',
    standalone: true,
    templateUrl: './all-products.component.html',
    styleUrl: './all-products.component.css',
    imports: [HeaderComponent, FooterComponent,NgFor,RouterLink,MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatSlideToggleModule,
        MatPaginatorModule,
        JsonPipe,NgxPaginationModule]
})
export class AllProductsComponent {

    p: number =1

    constructor(
        private productService: ProductService
    ) { }

    products: Product[]= this.productService.getProducts();

    length = 50;
    pageSize = 10;
    pageIndex = 0;
    pageSizeOptions = [5, 10, 25];
  
    hidePageSize = false;
    showPageSizeOptions = true;
    showFirstLastButtons = true;
    disabled = false;
  
    pageEvent: PageEvent | undefined;
  
    handlePageEvent(e: PageEvent) {
      this.pageEvent = e;
      this.length = e.length;
      this.pageSize = e.pageSize;
      this.pageIndex = e.pageIndex;
    }
  
    setPageSizeOptions(setPageSizeOptionsInput: string) {
      if (setPageSizeOptionsInput) {
        this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
      }
    }

}
