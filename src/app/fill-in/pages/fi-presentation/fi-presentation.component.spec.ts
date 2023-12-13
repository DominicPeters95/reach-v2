import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiPresentationComponent } from './fi-presentation.component';

describe('FiPresentationComponent', () => {
  let component: FiPresentationComponent;
  let fixture: ComponentFixture<FiPresentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiPresentationComponent]
    });
    fixture = TestBed.createComponent(FiPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
