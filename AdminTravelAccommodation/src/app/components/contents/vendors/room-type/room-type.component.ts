import { RoomTypeHttpApiService } from './../../../../Services/room-type-http-api.service';
import { BaseHttpApiService } from './../../../../Services/base-http-api/base-http-api.service';
import { RoomTypeViewModel } from './../../../../Models/room-type-view-model';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
 

@Component({
  selector: 'app-room-type',
  templateUrl: './room-type.component.html',
  styleUrls: ['./room-type.component.scss']
})
export class RoomTypeComponent implements OnInit {
  ModalTitle:string = "Delete";
  ModalContent:string = 'Delete Successfully';
  updatedType:RoomTypeViewModel = {Id : 1, Name:""};
  RoomTypeList:RoomTypeViewModel[] = [];  
  constructor(private toastr: ToastrService, private HttpService:RoomTypeHttpApiService, private HttpBaseService:BaseHttpApiService) { }

  ngOnInit() {
    this.getRoomTypeList();
  }
  reloadData(value:boolean)
  {
    console.log(value);
    this.getRoomTypeList();
  }
  getRoomTypeList()
  {
   this.HttpService.GetAll().subscribe(res=>{
     this.RoomTypeList = res;
     console.log(res);
   });
  }
  deleteSuccess()
  {
    
  }
  updateRoomType(event:any)
  {
    this.updatedType.Id = event.getAttribute('data-RoomTypeId');
    this.updatedType.Name = event.getAttribute('data-RoomTypeName');
   
      console.log(event.getAttribute('data-RoomTypeId')); 
  }
  deleteRoomType(id:any)
  {
    this.HttpBaseService.Delete("api/RoomType/Delete/"+id).subscribe(res=>{
      console.log(res);
    });
    this.toastr.success('Delete RooType Successfully', 'Successful Deletion!');
    console.log(id);
  }
}
