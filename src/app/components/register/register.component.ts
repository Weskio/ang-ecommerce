import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { MessageService } from 'primeng/api';
import { User } from '../../interfaces/auth';
import { AuthService } from '../../services/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from "../main-page/header/header.component";
import { ToastComponent } from "../toast/toast.component";
import { NgIf } from '@angular/common';
//import { passwordMatchValidator } from 'src/app/shared/password-match.directive';

@Component({
    selector: 'app-register',
    standalone: true,
    templateUrl: './register.component.html',
    styleUrl: './register.component.css',
    imports: [ReactiveFormsModule, HttpClientModule, HeaderComponent, ToastComponent]
})
export class RegisterComponent {
  isDetailsInvalid: boolean = false
  isDetailsValid: boolean = false
  isSubmitButtonClicked: boolean =false

  registerForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  }
  )

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  get name() {
    return this.registerForm.controls['name'];
  }

  get email() {
    return this.registerForm.controls['email'];
  }

  get password() {
    return this.registerForm.controls['password'];
  }


  submitDetails() {
    this.isSubmitButtonClicked = true
    const postData = { ...this.registerForm.value };
    this.authService.registerUser(postData as User).subscribe(
      response => {
         this.router.navigate(['login'])
         this.isDetailsValid = true
      },
      error => {
      console.log('error') 
      this.isDetailsInvalid = true
      }
    )
  }
}
