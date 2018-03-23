import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ContuctUsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContuctUsProvider {

  private apiPath = '/assets/contact-us.json';

  constructor(public http: HttpClient) {
    console.log('Hello ContuctUsProvider Provider');
  }

  getRegionalOffices(){
   return this.http.get<any>(this.apiPath)
  }

}
