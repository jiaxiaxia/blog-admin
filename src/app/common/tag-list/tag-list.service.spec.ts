import { TestBed, inject } from '@angular/core/testing';

import { TagListService } from './tag-list.service';

describe('TagListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TagListService]
    });
  });

  it('should be created', inject([TagListService], (service: TagListService) => {
    expect(service).toBeTruthy();
  }));
});
