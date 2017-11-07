import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.scss']
})
export class InformationsComponent implements OnInit {
  PageTitle:string = 'Customer Informations';
  constructor() { }

  ngOnInit() {
  }

}
