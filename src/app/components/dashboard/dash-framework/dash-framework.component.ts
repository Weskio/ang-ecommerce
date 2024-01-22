import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-dash-framework',
  standalone: true,
  imports: [],
  templateUrl: './dash-framework.component.html',
  styleUrl: './dash-framework.component.css'
})
export class DashFrameworkComponent {

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
