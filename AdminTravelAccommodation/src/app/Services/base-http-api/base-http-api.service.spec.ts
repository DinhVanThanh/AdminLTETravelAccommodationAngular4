import { TestBed, inject } from '@angular/core/testing';

import { BaseHttpApiService } from './base-http-api.service';

describe('BaseHttpApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaseHttpApiService]
    });
  });

  it('should be created', inject([BaseHttpApiService], (service: BaseHttpApiService) => {
    expect(service).toBeTruthy();
  }));
});
