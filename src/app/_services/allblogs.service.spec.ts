import { TestBed } from '@angular/core/testing';

import { AllblogsService } from './allblogs.service';

describe('AllblogsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllblogsService = TestBed.get(AllblogsService);
    expect(service).toBeTruthy();
  });
});
