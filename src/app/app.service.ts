import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/toPromise';
import { Deserialize } from 'cerialize';
import { Payload } from './payload';

@Injectable()
export class AppService {

  constructor(private http: Http) {

  }



  getData(vin): Promise<any> {
    let api:string = 'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/';
    let format:string = '?format=json';
//NHTSA vin decoder API
    return this.http.get(api + vin + format)
               .toPromise()
//Deserialize JSON response to a typed object.
               .then(response => Deserialize(response.json().Results[0], Payload))
               .catch();
  }

}
