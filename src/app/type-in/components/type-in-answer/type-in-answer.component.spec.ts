import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeInAnswerComponent } from './type-in-answer.component';

describe('TypeInAnswerComponent', () => {
  let component: TypeInAnswerComponent;
  let fixture: ComponentFixture<TypeInAnswerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypeInAnswerComponent]
    });
    fixture = TestBed.createComponent(TypeInAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
