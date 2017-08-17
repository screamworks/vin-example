import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from './app.service';
import { KeysPipe } from './pipe';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  vin:string;
  payload:any;

  public options = {
    position: ["top", "right"],
    timeOut: 2500,
    lastOnBottom: false
}

  constructor(protected service:AppService, private _service: NotificationsService) {

  }
//This function is used to separate the data into 3's so I can use ngFor to create new element rows.
  get data_triples(){
    let arr = [];
    let triple= [];
    for (let i = 1; i <= this.payload.length; i++) {
        triple.push(this.payload[i - 1]);
//Change value below for different number per row
        if (i % 3 === 0) {
            arr.push(triple);
            triple= [];
        }
    }
    if(triple.length > 0){
        arr.push(triple);
    }
    return arr;
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
      this._service.error('Error', this.payload.ErrorCode, {timeout: 5000});
      this.payload = '';
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
        this.payload = data.Results[0];
        console.log(this.payload);
        this.checkStatus();
      });
    }
  }
}
