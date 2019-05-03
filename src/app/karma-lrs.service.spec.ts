import { TestBed } from '@angular/core/testing';

import { KarmaLrsService } from './karma-lrs.service';

describe('KarmaLrsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KarmaLrsService = TestBed.get(KarmaLrsService);
    expect(service).toBeTruthy();
  });
});
