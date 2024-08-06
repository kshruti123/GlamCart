import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdDisplayComponent } from './prod-display.component';

describe('ProdDisplayComponent', () => {
  let component: ProdDisplayComponent;
  let fixture: ComponentFixture<ProdDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdDisplayComponent]
    });
    fixture = TestBed.createComponent(ProdDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
