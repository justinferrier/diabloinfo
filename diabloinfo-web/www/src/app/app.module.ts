import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule, Jsonp, Response } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { GlobalService } from './providers/global.service';
import { UtilityService } from './providers/utility.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    JsonpModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    GlobalService,
    UtilityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
