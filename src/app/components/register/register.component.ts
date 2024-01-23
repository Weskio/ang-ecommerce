import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { MessageService } from 'primeng/api';
import { User } from '../../interfaces/auth';
import { AuthService } from '../../services/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
//import { passwordMatchValidator } from 'src/app/shared/password-match.directive';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  }
  )

  // registerForm = new FormGroup({
  //   name: new FormControl('', Validators.required),
  //   email: new FormControl('', Validators.required),
  //   password: new FormControl('', Validators.required),
  // });

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
    const postData = { ...this.registerForm.value };
    this.authService.registerUser(postData as User).subscribe(
      response => {
         this.router.navigate(['login'])
      },
      error => {
      console.log('error') 
      }
    )
  }
}
