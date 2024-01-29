import { NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, Input, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../interfaces/product';

@Component({
  selector: 'app-landing',
  standalone: true,
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
  imports: [NgIf, HeaderComponent, FooterComponent, NgFor],
})
export class LandingComponent {
  isNewsletterShown = true;

  toggleNewsletter() {
    this.isNewsletterShown = false;
  }

  products = inject(ProductService);

  featuredProducts: Product[] = this.products.getFeaturedProducts()
}
