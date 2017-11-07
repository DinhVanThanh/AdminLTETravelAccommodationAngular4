import { environment } from './../../../../environments/environment';
import { LocationComponent } from './location/location.component';
import { NationComponent } from './nation/nation.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { AgmCoreModule } from '@agm/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.GoogleApiKey ,
      libraries: ["places"]
    }),
  ],
  exports:[
    NationComponent,
    LocationComponent
  ],
  declarations: [NationComponent, LocationComponent]
})
export class GeneralsModule { }
