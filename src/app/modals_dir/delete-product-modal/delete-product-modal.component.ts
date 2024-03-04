import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductService } from '../../services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-product-modal',
  standalone: true,
  imports: [],
  templateUrl: './delete-product-modal.component.html',
  styleUrl: './delete-product-modal.component.css'
})
export class DeleteProductModalComponent {
  @Input() isModalOpened: boolean = false
  @Output() closeModalEvent = new EventEmitter()
  @Input() productId: number = 0 
  closeModal(){
    this.isModalOpened = false
    this.closeModalEvent.emit()
    }

    constructor( private productService: ProductService){}

    deleteProduct(){
      this.productService.deleteProduct(this.productId)
      this.closeModal()
    }

}
