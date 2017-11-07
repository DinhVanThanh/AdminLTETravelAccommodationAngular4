import { GeneralsModule } from './Generals/generals.module';
import { CustomerModule } from './customers/cutomer.module';
import { VendorsModule } from './vendors/vendors.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { VendorRegistrationComponent } from './vendor-registration/vendor-registration.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    VendorsModule,
    CustomerModule,
    GeneralsModule,
    RouterModule
  ],
  exports : [ 
    VendorsModule,
    CustomerModule,
    GeneralsModule,
    DashboardComponent,
    LoginComponent,
    VendorRegistrationComponent
  ],
  declarations: [DashboardComponent, 
    LoginComponent, 
    VendorRegistrationComponent
    ]
})
export class ContentsModule { }
