import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CBlankComponent } from './c-blank.component';

describe('CBlankComponent', () => {
  let component: CBlankComponent;
  let fixture: ComponentFixture<CBlankComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CBlankComponent]
    });
    fixture = TestBed.createComponent(CBlankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
