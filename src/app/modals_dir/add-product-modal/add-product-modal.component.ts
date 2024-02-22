import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../../interfaces/product';
import { NgIf } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product-modal',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './add-product-modal.component.html',
  styleUrl: './add-product-modal.component.css',
})
export class AddProductModalComponent {
  constructor(
    public productService: ProductService,
    private fb: FormBuilder
  ) {}
  imageUrl: any;
 
  @Input() isModalOpened: boolean = false
  @Output() closeModalEvent = new EventEmitter()


  onSelectedFile(e: any) {
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.imageUrl = event.target.result;
      };
    }
  }

  addProductForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    description: [''],
    imageFile: [null],
    price: [0, Validators.required],
    category: ['', Validators.required],
  });

  addProduct() {
    const newProduct: Product = this.addProductForm.value
    newProduct.image = this.imageUrl
    newProduct.id =  Math.floor(Math.random()) 
   this.productService.addProduct(newProduct);
   Swal.fire({
   // position: 'top-end',
    icon: 'success',
    text: `Product '${newProduct.title}' added successful`,
    showConfirmButton: false,
    timer: 1500,
  });
   this.closeModal()
   //this.productService.addProductForm.reset();
  }

  closeModal(){
  this.isModalOpened = false
  this.closeModalEvent.emit()
  }
}
