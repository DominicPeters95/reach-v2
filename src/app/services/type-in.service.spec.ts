import { TestBed } from '@angular/core/testing';

import { TypeInService } from './type-in.service';

describe('TypeInService', () => {
  let service: TypeInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
