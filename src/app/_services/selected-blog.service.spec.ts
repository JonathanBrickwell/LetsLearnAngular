import { TestBed } from '@angular/core/testing';

import { SelectedBlogService } from './selected-blog.service';

describe('SelectedBlogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectedBlogService = TestBed.get(SelectedBlogService);
    expect(service).toBeTruthy();
  });
});
