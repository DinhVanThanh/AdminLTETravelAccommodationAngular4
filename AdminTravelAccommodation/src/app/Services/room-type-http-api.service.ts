import { environment } from './../../environments/environment';
import { RoomTypeViewModel } from './../Models/room-type-view-model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class RoomTypeHttpApiService {

  constructor(private http: HttpClient) { }
  GetAll():Observable<RoomTypeViewModel[]>
  {
    return this.http.get<RoomTypeViewModel[]>( environment.baseUrl + "api/RoomType/GetAllRoomTypes");
  }
}
