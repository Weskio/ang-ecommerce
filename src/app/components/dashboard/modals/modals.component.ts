import { Component, EventEmitter, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { initFlowbite } from 'flowbite';
//import { ProductCommunicationService } from '../../../services/product-communication.service';
import { Product } from '../../../interfaces/product';

@Component({
  selector: 'app-modals',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modals.component.html',
  styleUrl: './modals.component.css'
})
export class ModalsComponent {
  // productAdded = new EventEmitter<Product>();  // Define productAdded property

  // addForm: any = {
  //   name: '',
  //   desc: '',
  //   image: '',
  //   price: 0,
  //   category: ''
  // };  // Assuming you have an addForm property for ngModel bindings

  // constructor(private productCommunicationService: ProductCommunicationService) {}

  // ngOnInit(): void {
  //   // Initialization logic if needed
  // }

  // addProduct(newProduct: Product) {
  //   this.productAdded.emit(newProduct);
  //   this.productCommunicationService.addProduct(newProduct);
  //   console.log(newProduct)
  // }


  
}
