import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  let token = inject(CookieService).get('token');

  if (token) {
    const cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(cloned);
  } else {
    return next(req);
  }

};
