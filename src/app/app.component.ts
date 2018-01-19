import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from './app.service';
import { KeysPipe } from './pipe';
import { NotificationsService } from 'angular2-notifications';
import { Payload } from './payload';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  vin:string;
  payload:Payload;

  public options = {
    position: ["top", "right"],
    timeOut: 2500,
    lastOnBottom: false
}

  constructor(protected service:AppService, private _service: NotificationsService) {

  }

//Returned JSON supplies me with an error status - This is a basic function to retrieve it.
  checkStatus():void {
      let content:string = this.payload.ErrorCode;
//Get the first character (will be error code)
      let code = content.charAt(0);
      console.log(code);
//Error code 0 = All good!
      if (code === '0') {
      this._service.success('Success!', this.payload.ErrorCode);
      this.payload.ErrorCode = '';
    }
//Anything else, we have a problem.
    else {
      this._service.error('Error', this.payload.ErrorCode, {timeOut: 5000});
      this.payload = new Payload;
    }
  }

//In the event there is any other warnings supplied in the JSON returned.
  checkWarning():void {
    if (this.payload.AdditionalErrorText) {
      let content:string = this.payload.AdditionalErrorText;
//Deliver message with extended wait time.
      this._service.warn('Warning!', this.payload.AdditionalErrorText, {timeOut: 10000});
      this.payload.AdditionalErrorText = '';
    }
  }

  onSubmit(vin:string):void {
    console.log('Gathering information.....');
//Simple VIN validator :)
    if (vin.length === 17) {
      console.log(vin);
//Call to app.service to request the http data from api
      this.service.getData(vin).then((data) => {
//The Results object has the data stored in a 1 item array, need to specify the [0] object.
        this.payload = data;
        console.log(this.payload);
        this.checkStatus();
        this.checkWarning();

      });
    }
  }
}
