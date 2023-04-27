import { TestBed } from '@angular/core/testing';

import { RicmorService } from './ricmor.service';

describe('RicmorService', () => {
  let service: RicmorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RicmorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
