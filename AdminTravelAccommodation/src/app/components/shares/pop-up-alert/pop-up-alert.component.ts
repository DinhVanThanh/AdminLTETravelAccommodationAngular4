import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-pop-up-alert',
  templateUrl: './pop-up-alert.component.html',
  styleUrls: ['./pop-up-alert.component.scss']
})
export class PopUpAlertComponent implements OnInit {
  @Input()Title:string;
  @Input()Content:string;
  @Input()ModalId:string;
  @Output()Submit = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  SubmitModal()
  {
     
    this.Submit.emit();
  }
}
