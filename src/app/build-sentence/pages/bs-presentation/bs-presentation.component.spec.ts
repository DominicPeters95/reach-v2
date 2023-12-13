import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsPresentationComponent } from './bs-presentation.component';

describe('BsPresentationComponent', () => {
  let component: BsPresentationComponent;
  let fixture: ComponentFixture<BsPresentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BsPresentationComponent]
    });
    fixture = TestBed.createComponent(BsPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
