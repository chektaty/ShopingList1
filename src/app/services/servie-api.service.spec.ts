import { TestBed } from '@angular/core/testing';

import { ServieApiService } from './servie-api.service';

describe('ServieApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServieApiService = TestBed.get(ServieApiService);
    expect(service).toBeTruthy();
  });
});
