import { AdminRoutingModule } from './../../Routes/admin-routing/admin-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component'; 
import { PageHeaderComponent } from './page-header/page-header.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PopUpAlertComponent } from './pop-up-alert/pop-up-alert.component';
@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports : [
    SideBarComponent,
    HeaderComponent,
    ContentComponent,
    PageHeaderComponent,
    PaginationComponent,
    PopUpAlertComponent
  ],
  declarations: [
    SideBarComponent, 
    HeaderComponent, 
    ContentComponent, 
    PageHeaderComponent, 
    PaginationComponent, 
    PopUpAlertComponent]
})
export class TemplateModule { }
