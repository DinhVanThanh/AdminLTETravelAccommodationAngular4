import { RoomTypeComponent } from './../../components/contents/vendors/room-type/room-type.component';
import { AccommodationDetailsComponent } from './../../components/contents/vendors/accommodation-details/accommodation-details.component';
import { ContentComponent } from './../../components/shares/content/content.component';

import { VendorRegistrationComponent } from './../../components/contents/vendor-registration/vendor-registration.component';
import { LoginComponent } from './../../components/contents/login/login.component';
import { NationComponent } from './../../components/contents/Generals/nation/nation.component';
import { LocationComponent } from './../../components/contents/Generals/location/location.component';
import { ServicesComponent } from './../../components/contents/vendors/services/services.component';
import { RoomsComponent } from './../../components/contents/vendors/rooms/rooms.component';
import { HotelsComponent } from './../../components/contents/vendors/hotels/hotels.component'; 
import { BookingsComponent } from './../../components/contents/customers/bookings/bookings.component';
import { InformationsComponent } from './../../components/contents/customers/informations/informations.component';
import { VendorsInformationsComponent } from './../../components/contents/vendors/informations/informations.component';
import { DashboardComponent } from './../../components/contents/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',  redirectTo: "/Login",  pathMatch: 'full'},
  {path: 'Login', component: LoginComponent},
  {path: 'VendorRegister', component: VendorRegistrationComponent}, 
  {path: 'Admin', component: ContentComponent, 
    children: [
      {path: 'Dashboard', component: DashboardComponent},
      {path: 'CustomersInformations', component: InformationsComponent},
      {path: 'Bookings', component: BookingsComponent},
      {path: 'Locations', component: LocationComponent },
      {path: 'Nations', component: NationComponent },
      {path: 'VendorInformations', component: VendorsInformationsComponent},
      {path: 'Hotels', component: HotelsComponent },
      {path: 'Rooms', component: RoomsComponent},
      {path: 'RoomTypes', component: RoomTypeComponent},
      {path: 'Services', component: ServicesComponent} 
    ]
  }
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes,  { enableTracing: false } )],
  exports: [RouterModule]
})
export class AdminRoutingRoutingModule { }
