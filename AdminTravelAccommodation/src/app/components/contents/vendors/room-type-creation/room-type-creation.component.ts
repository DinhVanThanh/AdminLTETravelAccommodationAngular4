import { RoomTypeViewModel } from './../../../../Models/room-type-view-model';
import { environment } from './../../../../../environments/environment';
import { BaseHttpApiService } from './../../../../Services/base-http-api/base-http-api.service';

import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-room-type-creation',
  templateUrl: './room-type-creation.component.html',
  styleUrls: ['./room-type-creation.component.scss']
})
export class RoomTypeCreationComponent implements OnInit {
  Name:string;
  constructor(private RoomTypeHttp: BaseHttpApiService, private toastr: ToastrService) { }

  ngOnInit() {
  }
  
  AddNewRoomType()
  {
    
  
    this.RoomTypeHttp.Post("api/RoomType/Create", {"Id":1, "Name":this.Name}, null).subscribe(res=>{
       if( res && res.statusText == "OK")
      {
        this.toastr.success('Add new room type Successfully', 'Add New Room Type');
      }
      else 
      {
        this.toastr.error('Add new room type failly', 'Add New Room Type');
      }
      console.log(res);
    });
  }
}
