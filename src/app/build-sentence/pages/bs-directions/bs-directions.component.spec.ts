import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsDirectionsComponent } from './bs-directions.component';

describe('BsDirectionsComponent', () => {
  let component: BsDirectionsComponent;
  let fixture: ComponentFixture<BsDirectionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BsDirectionsComponent]
    });
    fixture = TestBed.createComponent(BsDirectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
