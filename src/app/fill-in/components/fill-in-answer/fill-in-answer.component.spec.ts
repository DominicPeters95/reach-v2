import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillInAnswerComponent } from '../answers-area/answers-area.component';

describe('FillInAnswerComponent', () => {
  let component: FillInAnswerComponent;
  let fixture: ComponentFixture<FillInAnswerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FillInAnswerComponent]
    });
    fixture = TestBed.createComponent(FillInAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
