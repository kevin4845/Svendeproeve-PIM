import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFamilyModalComponent } from './product-family-modal.component';

describe('ProductFamilyModalComponent', () => {
  let component: ProductFamilyModalComponent;
  let fixture: ComponentFixture<ProductFamilyModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductFamilyModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductFamilyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
