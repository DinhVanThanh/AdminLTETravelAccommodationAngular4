import { TestBed, inject } from '@angular/core/testing';

import { VendorHttpApiService } from './vendor-http-api.service';

describe('VendorHttpApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VendorHttpApiService]
    });
  });

  it('should be created', inject([VendorHttpApiService], (service: VendorHttpApiService) => {
    expect(service).toBeTruthy();
  }));
});
