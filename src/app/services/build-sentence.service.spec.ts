import { TestBed } from '@angular/core/testing';

import { BuildSentenceService } from './build-sentence.service';

describe('BuildSentenceService', () => {
  let service: BuildSentenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuildSentenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
