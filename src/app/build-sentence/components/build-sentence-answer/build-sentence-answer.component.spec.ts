import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildSentenceAnswerComponent } from './build-sentence-answer.component';

describe('BuildSentenceAnswerComponent', () => {
  let component: BuildSentenceAnswerComponent;
  let fixture: ComponentFixture<BuildSentenceAnswerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuildSentenceAnswerComponent]
    });
    fixture = TestBed.createComponent(BuildSentenceAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
