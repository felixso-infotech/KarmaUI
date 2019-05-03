import { TestBed } from '@angular/core/testing';

import { Base64decodeService } from './base64decode.service';

describe('Base64decodeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Base64decodeService = TestBed.get(Base64decodeService);
    expect(service).toBeTruthy();
  });
});
