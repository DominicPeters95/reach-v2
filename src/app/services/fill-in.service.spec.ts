import { TestBed } from '@angular/core/testing';

import { FillInService } from './fill-in.service';

describe('FillInService', () => {
  let service: FillInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FillInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
