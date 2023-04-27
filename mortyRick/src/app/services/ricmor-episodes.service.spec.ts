import { TestBed } from '@angular/core/testing';

import { RicmorEpisodesService } from './ricmor-episodes.service';

describe('RicmorEpisodesService', () => {
  let service: RicmorEpisodesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RicmorEpisodesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
