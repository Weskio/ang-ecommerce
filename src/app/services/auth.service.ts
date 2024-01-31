import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/auth';
import { Observable, catchError, of, tap, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'https://6b63-197-159-140-9.ngrok-free.app/api';
  private tokenKey = 'userToken';
  private userKey = 'userData';
  authService: any;
  router: any;

  constructor(private http: HttpClient) {}

  registerUser(userDetails: User) {
    return this.http.post(`${this.baseUrl}/save/user`, userDetails);
  }

  loginUser(userDetails: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, userDetails).pipe(
      tap((response: any) => {
        // Store the token and user data in sessionStorage
        sessionStorage.setItem(this.tokenKey, response.token);
        sessionStorage.setItem(this.userKey, JSON.stringify(response.user));
      })
    );
  }

  logout(): Observable<any> {
    const userToken = this.getUserToken();

    if (!userToken) {
      // If not authenticated, navigate to the login page without making a request
      this.router.navigate(['login']);
      return of(null);
    }

    const headers = { Authorization: `Bearer ${userToken}` };

    return this.http.post(`${this.baseUrl}/logout`, {}, { headers }).pipe(
      tap(() => {
        // Clear the token and user data from sessionStorage
        sessionStorage.removeItem(this.tokenKey);
        sessionStorage.removeItem(this.userKey);
        console.log('Logout successful');
      }),
      catchError((error: any) => {
        console.error('Logout error:', error);
        // Even if there's an error, clear the session storage and navigate to the login page
        sessionStorage.removeItem(this.tokenKey);
        sessionStorage.removeItem(this.userKey);
        this.router.navigate(['login']);
        return throwError(error);
      })
    );
  }
  

  getUserToken(): string | null {
    return sessionStorage.getItem(this.tokenKey);
  }

  getUserData(): User | null {
    const userDataString = sessionStorage.getItem(this.userKey);
    return userDataString ? JSON.parse(userDataString) : null;
  }
}