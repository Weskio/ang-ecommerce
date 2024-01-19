// import { CanActivateFn, Router } from '@angular/router';
// import { AuthService } from '../services/auth.service';
// import { Injectable } from '@angular/core';



// @Injectable({
//   providedIn: 'root'
// })

// export const authGuard: CanActivateFn = (route, state) => {
//    AuthService: AuthService
//    router: Router

//   canActivate(): boolean {
//     const userToken = this.authService.getUserToken();

//     if (userToken) {
//       // User is authenticated
//       return true;
//     } else {
//       // User is not authenticated, navigate to the login page
//       this.router.navigate(['login']);
//       return false;
//     }
//   }
// };
// function canActivate() {
//   throw new Error('Function not implemented.');
// }

