import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, Injectable } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpModule } from '@angular/http';
import {Observable} from "rxjs/Rx";
import { SimpleNotificationsModule } from 'angular2-notifications';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { KeysPipe } from './pipe';


@NgModule({
  declarations: [
    AppComponent,
    KeysPipe,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot(),
  ],
  providers: [ AppService ],
  schemas: [ NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
