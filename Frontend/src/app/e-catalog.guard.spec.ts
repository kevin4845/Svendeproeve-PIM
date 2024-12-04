import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { eCatalogGuard } from './e-catalog.guard';

describe('eCatalogGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => eCatalogGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
