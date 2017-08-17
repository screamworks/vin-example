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
