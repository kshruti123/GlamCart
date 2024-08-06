import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewArivalComponentComponent } from './new-arival-component.component';

describe('NewArivalComponentComponent', () => {
  let component: NewArivalComponentComponent;
  let fixture: ComponentFixture<NewArivalComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewArivalComponentComponent]
    });
    fixture = TestBed.createComponent(NewArivalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
