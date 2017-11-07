import { TemplateModule } from './../../shares/template.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationsComponent } from './informations/informations.component';
import { BookingsComponent } from './bookings/bookings.component';

@NgModule({
  imports: [
    CommonModule,
    TemplateModule
  ],
  exports:[
    InformationsComponent,
    BookingsComponent
  ],
  declarations: [InformationsComponent, BookingsComponent]
})
export class CustomerModule { }
