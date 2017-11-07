import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingRoutingModule } from './admin-routing-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingRoutingModule
  ],
  exports : [
    AdminRoutingRoutingModule
  ],
  declarations: []
})
export class AdminRoutingModule { }
