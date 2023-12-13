import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillInContentComponent } from './fill-in-content.component';

describe('FillInContentComponent', () => {
  let component: FillInContentComponent;
  let fixture: ComponentFixture<FillInContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FillInContentComponent]
    });
    fixture = TestBed.createComponent(FillInContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
