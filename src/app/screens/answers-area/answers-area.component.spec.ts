import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswersAreaComponent } from './answers-area.component';

describe('AnswersAreaComponent', () => {
  let component: AnswersAreaComponent;
  let fixture: ComponentFixture<AnswersAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnswersAreaComponent]
    });
    fixture = TestBed.createComponent(AnswersAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
