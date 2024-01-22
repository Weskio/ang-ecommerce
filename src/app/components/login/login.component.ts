import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { MessageService } from 'primeng/api';
import { User } from '../../interfaces/auth';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  // loginForm = this.fb.group({
  //   email: ['', [Validators.required, Validators.email]],
  //   password: ['', Validators.required],
  // });

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {}

  // get email() {
  //   return this.loginForm.controls['email'];
  // }
  // get password() {
  //   return this.loginForm.controls['password'];
  // }

  loginUser() {
    const { email, password } = this.loginForm.value;
    this.authService.loginUser({ email, password } as User).subscribe(
      (response) => {
        const userName = response.user.name;
        const email = response.user.email;
        console.log(response)

        this.router.navigate(['home']);
      },
      (error) => {
        console.log("Error bitch")
      }
    );
  }
}
