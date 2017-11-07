import { TestBed, inject } from '@angular/core/testing';

import { BookingsHttpApiService } from './bookings-http-api.service';

describe('BookingsHttpApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookingsHttpApiService]
    });
  });

  it('should be created', inject([BookingsHttpApiService], (service: BookingsHttpApiService) => {
    expect(service).toBeTruthy();
  }));
});
