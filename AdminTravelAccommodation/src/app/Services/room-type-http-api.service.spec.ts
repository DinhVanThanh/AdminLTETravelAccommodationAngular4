import { TestBed, inject } from '@angular/core/testing';

import { RoomTypeHttpApiService } from './room-type-http-api.service';

describe('RoomTypeHttpApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoomTypeHttpApiService]
    });
  });

  it('should be created', inject([RoomTypeHttpApiService], (service: RoomTypeHttpApiService) => {
    expect(service).toBeTruthy();
  }));
});
