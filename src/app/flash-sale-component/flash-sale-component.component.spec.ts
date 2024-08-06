import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashSaleComponentComponent } from './flash-sale-component.component';

describe('FlashSaleComponentComponent', () => {
  let component: FlashSaleComponentComponent;
  let fixture: ComponentFixture<FlashSaleComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlashSaleComponentComponent]
    });
    fixture = TestBed.createComponent(FlashSaleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
