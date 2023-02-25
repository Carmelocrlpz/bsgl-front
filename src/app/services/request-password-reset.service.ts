import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestPasswordReset } from '../models/requestPasswordReset';
import { global } from './global';

@Injectable({
  providedIn: 'root'
})
export class RequestPasswordResetService {

   public url:string;


   constructor(public _http: HttpClient) { 
    this.url = global.url;
  }

  requestReset(email:any): Observable<any>{
    let json = JSON.stringify(email);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.post(this.url+'sendPasswordResetLink', params, {headers:headers});
  }


}
