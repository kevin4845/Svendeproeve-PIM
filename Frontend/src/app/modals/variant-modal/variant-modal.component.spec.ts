import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariantModalComponent } from './variant-modal.component';

describe('VariantModalComponent', () => {
  let component: VariantModalComponent;
  let fixture: ComponentFixture<VariantModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VariantModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VariantModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
