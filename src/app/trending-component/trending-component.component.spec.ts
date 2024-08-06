import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingComponentComponent } from './trending-component.component';

describe('TrendingComponentComponent', () => {
  let component: TrendingComponentComponent;
  let fixture: ComponentFixture<TrendingComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrendingComponentComponent]
    });
    fixture = TestBed.createComponent(TrendingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
