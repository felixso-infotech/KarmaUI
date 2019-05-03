import { TestBed } from '@angular/core/testing';

import { KarmaXapiService } from './karma-xapi.service';

describe('KarmaXapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KarmaXapiService = TestBed.get(KarmaXapiService);
    expect(service).toBeTruthy();
  });
});
