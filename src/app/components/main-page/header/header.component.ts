import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { CartComponent } from "../cart/cart.component";
import { NgIf } from '@angular/common';
import { CartServiceService } from '../../../services/cart-service.service';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [CartComponent, NgIf]
})
export class HeaderComponent {

  @Input() showCartButton: boolean = true;

  isCartShown = false;
  
  showCart() {
    this.isCartShown = !this.isCartShown;
  }

  totalItemCount: number = 0;

  constructor(private cartService:CartServiceService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.updateTotalItemCount();
  }

  updateTotalItemCount(): void {
    this.totalItemCount = this.cartService.getTotalItemCount();
    // Trigger change detection explicitly
    this.cdr.detectChanges();
  }
}
