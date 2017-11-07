import { TestBed, inject } from '@angular/core/testing';

import { CustomerHttpApiService } from './customer-http-api.service';

describe('CustomerHttpApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerHttpApiService]
    });
  });

  it('should be created', inject([CustomerHttpApiService], (service: CustomerHttpApiService) => {
    expect(service).toBeTruthy();
  }));
});
