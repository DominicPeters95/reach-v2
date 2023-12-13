import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildSentenceContentComponent } from './build-sentence-content.component';

describe('BuildSentenceContentComponent', () => {
  let component: BuildSentenceContentComponent;
  let fixture: ComponentFixture<BuildSentenceContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuildSentenceContentComponent]
    });
    fixture = TestBed.createComponent(BuildSentenceContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
