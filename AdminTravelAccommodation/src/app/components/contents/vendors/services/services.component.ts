import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  PageTitle:string = 'Hotel Services';
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
