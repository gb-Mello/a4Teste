import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http:Http) {
    console.log('Data service connectada...');

   }

   getClientes(name:string){
     return this.http.get('https://dummy-blue-hunter.mybluemix.net/user/by-name/'+name)
     .map(res => res.json());
   }

   getLivros(title:string){
    return this.http.get('https://dummy-blue-hunter.mybluemix.net/book/by-title/'+title)
    .map(res => res.json());
  }

}
