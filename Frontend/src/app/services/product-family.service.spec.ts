import { TestBed } from '@angular/core/testing';

import { ProductFamilyService } from './product-family.service';

describe('ProductFamilyService', () => {
  let service: ProductFamilyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductFamilyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
