import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTypeinComponent } from './c-typein.component';

describe('CTypeinComponent', () => {
  let component: CTypeinComponent;
  let fixture: ComponentFixture<CTypeinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CTypeinComponent]
    });
    fixture = TestBed.createComponent(CTypeinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
