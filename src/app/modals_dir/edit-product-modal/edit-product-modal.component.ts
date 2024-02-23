import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-edit-product-modal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-product-modal.component.html',
  styleUrl: './edit-product-modal.component.css',
})
export class EditProductModalComponent {
  @Input() isModalOpened: boolean = false;
  @Input() ProductEdit!: Product;
  @Output() closeModalEvent = new EventEmitter();
  @Input() productId: number = 0 

  constructor(
    private productService: ProductService,
    private fb: FormBuilder
  ) {}

  editProductForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    description: [''],
    imageFile: [null],
    price: [0, Validators.required],
    category: ['', Validators.required],
  });

  closeModal() {
    this.isModalOpened = false;
    this.closeModalEvent.emit();
  }

  editProduct() {
    this.ProductEdit = this.editProductForm.value
    //console.log(this.ProductEdit)
    this.productService.editProduct(this.ProductEdit, this.productId);
    this.closeModal();
  }
}
