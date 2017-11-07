import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  PageTitle:string = 'Rooms';
  ModalTitle:string = "Delete";
  ModalContent:string = 'Delete Successfully';
  constructor(private toastr: ToastrService) { }

  ngOnInit() {
    
  }
  deleteSuccess()
  {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
}
