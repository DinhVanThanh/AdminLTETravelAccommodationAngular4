import { TestBed, inject } from '@angular/core/testing';

import { ServiceHttpApiService } from './service-http-api.service';

describe('ServiceHttpApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceHttpApiService]
    });
  });

  it('should be created', inject([ServiceHttpApiService], (service: ServiceHttpApiService) => {
    expect(service).toBeTruthy();
  }));
});
