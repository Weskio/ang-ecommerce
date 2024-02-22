import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  closeModal(){
    this.isModalOpened = false
    this.closeModalEvent.emit()
    }

}
