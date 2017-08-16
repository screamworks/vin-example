import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from './app.service';
import { KeysPipe } from './pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  vin:string;
  payload:any;
  constructor(protected service:AppService) {

  }

  onSubmit(vin:string):void {
    console.log('Gathering information.....');
    if (vin.length === 17) {
      console.log(vin);
      this.service.getData(vin).then((data) => {
        this.payload = data.Results[0];
        console.log(this.payload);
      });

    }
  }
}
