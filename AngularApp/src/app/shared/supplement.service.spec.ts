import { TestBed, inject } from '@angular/core/testing';

import { SupplementService } from './supplement.service';

describe('SupplementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SupplementService]
    });
  });

  it('should be created', inject([SupplementService], (service: SupplementService) => {
    expect(service).toBeTruthy();
  }));
});
