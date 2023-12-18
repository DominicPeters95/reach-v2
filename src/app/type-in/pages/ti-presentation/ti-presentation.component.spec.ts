import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiPresentationComponent } from './ti-presentation.component';

describe('TiPresentationComponent', () => {
  let component: TiPresentationComponent;
  let fixture: ComponentFixture<TiPresentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TiPresentationComponent]
    });
    fixture = TestBed.createComponent(TiPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
