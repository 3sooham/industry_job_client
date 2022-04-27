import { TestBed } from '@angular/core/testing';

import { IndustryJobService } from './industry-job.service';

describe('IndustryJobService', () => {
  let service: IndustryJobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndustryJobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
