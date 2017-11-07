import { AdminRoutingModule } from './Routes/admin-routing/admin-routing.module';
import { TemplateModule } from './components/shares/template.module';
import { ContentsModule } from './components/contents/contents.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component'; 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AdminRoutingModule,
    ContentsModule,
    TemplateModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
