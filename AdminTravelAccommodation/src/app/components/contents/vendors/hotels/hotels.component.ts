import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {
  PageTitle:string = 'Hotels';
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
