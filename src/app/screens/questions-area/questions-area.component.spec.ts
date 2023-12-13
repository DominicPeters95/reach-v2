import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsAreaComponent } from './questions-area.component';

describe('QuestionsAreaComponent', () => {
  let component: QuestionsAreaComponent;
  let fixture: ComponentFixture<QuestionsAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionsAreaComponent]
    });
    fixture = TestBed.createComponent(QuestionsAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
