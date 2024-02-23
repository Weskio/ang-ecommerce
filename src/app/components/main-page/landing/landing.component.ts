import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, Input, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../interfaces/product';
import { RouterLink } from '@angular/router';
import { CartServiceService } from '../../../services/cart-service.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
  imports: [NgIf, HeaderComponent, FooterComponent, NgFor, RouterLink],
})
export class LandingComponent {
  isNewsletterShown = true;

  toggleNewsletter() {
    this.isNewsletterShown = false;
  }

  products = inject(ProductService);

  featuredProducts: Product[] = []

  totalItemCount: number = 0;

  constructor(private cartService:CartServiceService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.updateTotalItemCount();
    this.products.ngOnInit();

    this.featuredProducts = this.products.getFeaturedProducts()
  }

  updateTotalItemCount(): void {
    this.totalItemCount = this.cartService.getTotalItemCount();
    // Trigger change detection explicitly
    this.cdr.detectChanges();
  }

}
