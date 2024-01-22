import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  userName: string | undefined;
  email :string |undefined;

  constructor(private router: Router, private authService: AuthService) { }

  logout() {
    this.authService.logout().subscribe(
      () => {
        // Successful logout, navigate to the login page
        this.router.navigate(['']);
      },
      (error: any) => {
        console.error('Logout error:', error);
        // Navigate to the login page even if there's an error
        this.router.navigate(['']);
      }
    );
  }

  ngOnInit(): void {
    initFlowbite();
    const userData = this.authService.getUserData();
    if (userData) {
      this.userName = userData.name;
      this.email = userData.email
    }
  }

}
