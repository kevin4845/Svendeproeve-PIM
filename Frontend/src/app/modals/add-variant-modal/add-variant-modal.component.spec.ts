import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVariantModalComponent } from './add-variant-modal.component';

describe('AddVariantModalComponent', () => {
  let component: AddVariantModalComponent;
  let fixture: ComponentFixture<AddVariantModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddVariantModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddVariantModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
