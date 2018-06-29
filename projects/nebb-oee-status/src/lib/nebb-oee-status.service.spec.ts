import { TestBed, inject } from '@angular/core/testing';

import { NebbOeeStatusService } from './nebb-oee-status.service';

describe('NebbOeeStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NebbOeeStatusService]
    });
  });

  it('should be created', inject([NebbOeeStatusService], (service: NebbOeeStatusService) => {
    expect(service).toBeTruthy();
  }));
});
