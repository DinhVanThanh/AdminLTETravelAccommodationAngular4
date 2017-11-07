import { ToastrService } from 'ngx-toastr';
import { BaseHttpApiService } from './../../../../Services/base-http-api/base-http-api.service';
import { RoomTypeViewModel } from './../../../../Models/room-type-view-model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-room-type-edit',
  templateUrl: './room-type-edit.component.html',
  styleUrls: ['./room-type-edit.component.scss']
})
export class RoomTypeEditComponent implements OnInit {
  @Input()RoomTypeUpdated:RoomTypeViewModel; 

  @Output()ReloadData = new EventEmitter<boolean>();

  RoomTypeName:string;
  constructor(private HttpService:BaseHttpApiService, private toastr: ToastrService) { }
  
  ngOnInit() {
  }
  updateRoomTypeName(value:any)
  {
    this.HttpService.Put("api/RoomType/Update", {"Id" : this.RoomTypeUpdated.Id, "Name" : value.value }, null).subscribe(res=>{
      console.log(res);
      this.toastr.success('Delete RooType Successfully', 'Successful Deletion!');
      this.ReloadData.emit(true);
    });
    console.log(value.value);
    console.log(this.RoomTypeUpdated.Id);
  }
}
