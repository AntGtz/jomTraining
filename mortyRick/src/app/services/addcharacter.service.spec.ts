import { TestBed } from '@angular/core/testing';

import { AddcharacterService } from './addcharacter.service';

describe('AddcharacterService', () => {
  let service: AddcharacterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddcharacterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
