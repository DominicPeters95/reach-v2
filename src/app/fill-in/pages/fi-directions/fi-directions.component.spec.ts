import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiDirectionsComponent } from './fi-directions.component';

describe('FiDirectionsComponent', () => {
  let component: FiDirectionsComponent;
  let fixture: ComponentFixture<FiDirectionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiDirectionsComponent]
    });
    fixture = TestBed.createComponent(FiDirectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
