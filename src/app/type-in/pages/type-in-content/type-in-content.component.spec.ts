import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeInContentComponent } from './type-in-content.component';

describe('TypeInContentComponent', () => {
  let component: TypeInContentComponent;
  let fixture: ComponentFixture<TypeInContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypeInContentComponent]
    });
    fixture = TestBed.createComponent(TypeInContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
