import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeInQuestionComponent } from './type-in-question.component';

describe('TypeInQuestionComponent', () => {
  let component: TypeInQuestionComponent;
  let fixture: ComponentFixture<TypeInQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypeInQuestionComponent]
    });
    fixture = TestBed.createComponent(TypeInQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
