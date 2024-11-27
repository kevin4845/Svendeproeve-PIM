import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductFamilyModalComponent } from './add-product-family-modal.component';

describe('AddProductFamilyModalComponent', () => {
  let component: AddProductFamilyModalComponent;
  let fixture: ComponentFixture<AddProductFamilyModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddProductFamilyModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddProductFamilyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
