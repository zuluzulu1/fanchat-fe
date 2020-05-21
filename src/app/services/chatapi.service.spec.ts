import { TestBed } from '@angular/core/testing';

import { ChatapiService } from './chatapi.service';

describe('ChatapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChatapiService = TestBed.get(ChatapiService);
    expect(service).toBeTruthy();
  });
});
