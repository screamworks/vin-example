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

  get data_triples(){
    let arr = [];
    let triple= [];
    for (let i = 1; i <= this.payload.length; i++) {
        triple.push(this.payload[i - 1]);
        if (i % 4 === 0) {
            arr.push(triple);
            triple= [];
        }
    }
    if(triple.length > 0){
        arr.push(triple);
    }
    return arr;
  }

  checkStatus():void {
      let content:string = this.payload.ErrorCode;
      let code = content.charAt(0);
      console.log(code);
      if (code === '0') {
      this._service.success('Success!', this.payload.ErrorCode);
      this.payload.ErrorCode = '';
    } else {
      this._service.error('Error', this.payload.ErrorCode, {timeout: 5000});
      this.payload = '';
    }
  }

  onSubmit(vin:string):void {
    console.log('Gathering information.....');
    if (vin.length === 17) {
      console.log(vin);
      this.service.getData(vin).then((data) => {
        this.payload = data.Results[0];
        console.log(this.payload);
        this.checkStatus();
      });
    }
  }
}
