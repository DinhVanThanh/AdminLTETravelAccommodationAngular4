import { Component, OnInit, NgZone } from '@angular/core'; 
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload';
@Component({
  selector: 'app-accommodation-creation',
  templateUrl: './accommodation-creation.component.html',
  styleUrls: ['./accommodation-creation.component.scss'] ,
  providers:[FileSelectDirective,
    FileDropDirective]
})
export class AccommodationCreationComponent implements OnInit {
   URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
  constructor() {
    
   }

  ngOnInit() {
     
  }

  public uploader:FileUploader = new FileUploader({url: this.URL});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;
 
  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
 
  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }
 

}
