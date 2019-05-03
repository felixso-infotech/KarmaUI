import { TestBed } from '@angular/core/testing';

import { KarmaAppService } from './karma-app.service';

describe('KarmaAppServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KarmaAppService = TestBed.get(KarmaAppService);
    expect(service).toBeTruthy();
  });
});
