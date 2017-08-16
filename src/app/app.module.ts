import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, Injectable } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgForm } from '@angular/forms';

import { HttpModule } from '@angular/http';
import {Observable} from "rxjs/Rx";

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { KeysPipe } from './pipe';


@NgModule({
  declarations: [
    AppComponent,
    NgForm,
    KeysPipe,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpModule,
  ],
  providers: [ AppService ],
  schemas: [ NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
