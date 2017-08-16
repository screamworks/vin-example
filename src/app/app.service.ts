import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService {

  constructor(private http: Http) {

  }



  getData(vin): Promise<any> {
    return this.http.get('https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/' + vin + '?format=json')
               .toPromise()
               .then(response => response.json())
               .catch();
  }

}
