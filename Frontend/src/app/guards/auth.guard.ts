import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CookieService } from 'ngx-cookie';

export const authGuard: CanActivateFn = (route, state) => {
  let token = inject(CookieService).get('token');
  let router = inject(Router);
  if (token == null) {
    router.navigate(['/login']);
    return false;
  } else {
    let tokenExpired = inject(JwtHelperService).isTokenExpired(token);
    if (tokenExpired) {
      router.navigate(['/login']);
    }
    return !tokenExpired;
  }
};
