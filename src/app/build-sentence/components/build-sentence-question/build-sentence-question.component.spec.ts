import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildSentenceQuestionComponent } from './build-sentence-question.component';

describe('BuildSentenceQuestionComponent', () => {
  let component: BuildSentenceQuestionComponent;
  let fixture: ComponentFixture<BuildSentenceQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuildSentenceQuestionComponent]
    });
    fixture = TestBed.createComponent(BuildSentenceQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
