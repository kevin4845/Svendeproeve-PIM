import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECatalogComponent } from './e-catalog.component';

describe('ECatalogComponent', () => {
  let component: ECatalogComponent;
  let fixture: ComponentFixture<ECatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ECatalogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ECatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
