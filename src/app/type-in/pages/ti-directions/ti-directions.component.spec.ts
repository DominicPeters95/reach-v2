import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiDirectionsComponent } from './ti-directions.component';

describe('TiDirectionsComponent', () => {
  let component: TiDirectionsComponent;
  let fixture: ComponentFixture<TiDirectionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TiDirectionsComponent]
    });
    fixture = TestBed.createComponent(TiDirectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
