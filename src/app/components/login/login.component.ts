import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { MessageService } from 'primeng/api';
import { User } from '../../interfaces/auth';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from "../main-page/header/header.component";
import { ToastComponent } from "../toast/toast.component";

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    imports: [ReactiveFormsModule, HttpClientModule, HeaderComponent, ToastComponent]
})
export class LoginComponent {

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
isDetailsInvalid: boolean = false
isDetailsValid: boolean = false

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {}

  get email() {
    return this.loginForm.controls['email'];
  }
  get password() {
    return this.loginForm.controls['password'];
  }

  loginUser() {
    const { email, password } = this.loginForm.value;
    this.authService.loginUser({ email, password } as User).subscribe(
      (response) => {
        const userName = response.user.name;
        const email = response.user.email;
        this.router.navigate(['home']);
      this.isDetailsValid=true
      },
      (error) => {
        console.log("Error")
        this.isDetailsInvalid = true
      }
    );
  }
}
