import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillInQuestionComponent } from '../questions-area/questions-area.component';

describe('FillInQuestionComponent', () => {
  let component: FillInQuestionComponent;
  let fixture: ComponentFixture<FillInQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FillInQuestionComponent]
    });
    fixture = TestBed.createComponent(FillInQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
