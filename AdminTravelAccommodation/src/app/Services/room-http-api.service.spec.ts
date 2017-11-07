import { TestBed, inject } from '@angular/core/testing';

import { RoomHttpApiService } from './room-http-api.service';

describe('RoomHttpApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoomHttpApiService]
    });
  });

  it('should be created', inject([RoomHttpApiService], (service: RoomHttpApiService) => {
    expect(service).toBeTruthy();
  }));
});
