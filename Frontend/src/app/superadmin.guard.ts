import { CanActivateFn } from '@angular/router';

export const superadminGuard: CanActivateFn = (route, state) => {
  return true;
};
