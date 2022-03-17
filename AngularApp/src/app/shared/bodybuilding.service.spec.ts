import { TestBed, inject } from '@angular/core/testing';

import { BodybuildingService } from './bodybuilding.service';

describe('BodybuildingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BodybuildingService]
    });
  });

  it('should be created', inject([BodybuildingService], (service: BodybuildingService) => {
    expect(service).toBeTruthy();
  }));
});
