import { TestBed } from '@angular/core/testing';

import { CompletedActivitiesService } from './completed-activities.service';

describe('CompletedActivitiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompletedActivitiesService = TestBed.get(CompletedActivitiesService);
    expect(service).toBeTruthy();
  });
});
