import { TestBed, inject } from '@angular/core/testing';

import { HotelHttpApiService } from './hotel-http-api.service';

describe('HotelHttpApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HotelHttpApiService]
    });
  });

  it('should be created', inject([HotelHttpApiService], (service: HotelHttpApiService) => {
    expect(service).toBeTruthy();
  }));
});
