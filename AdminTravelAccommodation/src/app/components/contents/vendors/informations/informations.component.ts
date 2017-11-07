import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.scss']
})
export class VendorsInformationsComponent implements OnInit {
  PageTitle:string = 'Vendor Informations';
  constructor() { }

  ngOnInit() {
  }

}
