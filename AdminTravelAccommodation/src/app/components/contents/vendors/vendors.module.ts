import { RoomTypeHttpApiService } from './../../../Services/room-type-http-api.service';
import { BaseHttpApiService } from './../../../Services/base-http-api/base-http-api.service';
import { RouterModule } from '@angular/router';
import { TemplateModule } from './../../shares/template.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorsInformationsComponent } from './informations/informations.component';
import { HotelsComponent } from './hotels/hotels.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ServicesComponent } from './services/services.component';
import { AccommodationDetailsComponent } from './accommodation-details/accommodation-details.component';
import { AccommodationCreationComponent } from './accommodation-creation/accommodation-creation.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { RoomCreationComponent } from './room-creation/room-creation.component';
import { ServiceCreationComponent } from './service-creation/service-creation.component'; 
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { FormsModule } from '@angular/forms';
import { RoomTypeComponent } from './room-type/room-type.component';
import { RoomTypeCreationComponent } from './room-type-creation/room-type-creation.component';
import { RoomTypeEditComponent } from './room-type-edit/room-type-edit.component';
import { ServiceEditComponent } from './service-edit/service-edit.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    TemplateModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot() ,
    AngularMultiSelectModule,
    FormsModule
  ],
  exports:[
    VendorsInformationsComponent, 
    HotelsComponent,
    RoomsComponent,
    ServicesComponent
  ],
  declarations: [
    VendorsInformationsComponent, 
    HotelsComponent, 
    RoomsComponent, 
    ServicesComponent, 
    AccommodationDetailsComponent, 
    AccommodationCreationComponent,
    FileSelectDirective,
    FileDropDirective,
    UploadImageComponent,
    RoomCreationComponent,
    ServiceCreationComponent,
    RoomTypeComponent,
    RoomTypeCreationComponent,
    RoomTypeEditComponent,
    ServiceEditComponent],
    providers:[
      BaseHttpApiService,
      RoomTypeHttpApiService
    ]
})
export class VendorsModule { }
