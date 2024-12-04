import { CanActivateFn } from '@angular/router';

export const eCatalogGuard: CanActivateFn = (route, state) => {
  return true;
};
