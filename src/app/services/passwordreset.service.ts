import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PasswordReset } from '../models/passwordreset';
import { global } from './global';

@Injectable({
  providedIn: 'root'
})
export class PasswordresetService {

  public url:string;


  constructor(public _http: HttpClient) { 
   this.url = global.url;
 }



 resetPass(datapass:any): Observable<any>{
   let json = JSON.stringify(datapass);
   let params = 'json='+json;
   let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
   return this._http.post(this.url+'resetPassword', params, {headers:headers});
 }







}
