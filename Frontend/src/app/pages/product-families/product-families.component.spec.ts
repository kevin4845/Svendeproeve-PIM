import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFamiliesComponent } from './product-families.component';

describe('ProductFamiliesComponent', () => {
  let component: ProductFamiliesComponent;
  let fixture: ComponentFixture<ProductFamiliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductFamiliesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductFamiliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
