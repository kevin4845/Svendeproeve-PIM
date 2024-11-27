import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CookieService } from 'ngx-cookie';

export const guestGuard: CanActivateFn = (route, state) => {
  let token = inject(CookieService).get('token');
  let router = inject(Router);
  if (token == null) {
    // If we dont have a token then we are not logged in and we can proceed.
    return true;
  } else {
    let tokenExpired = inject(JwtHelperService).isTokenExpired(token);
    if (tokenExpired) {
      // If the token is expired then we are not logged in and we can proceed.
      return true;

    } else {
      // If the token is not expired then we are logged in and we should not proceed.
      console.log('You are already logged in');
      router.navigate(['/']);
      return false;
    }
  }
};
