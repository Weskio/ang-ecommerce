import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [NgIf],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent {
  @Input() isDetailsInvalid: boolean = false; 
  @Input() isDetailsValid: boolean = false;

  closeToast(){
    this.isDetailsInvalid = !this.isDetailsInvalid;
  }


}
