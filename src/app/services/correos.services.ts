import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Correos } from '../models/correos';
import { UserService } from './user.service'
import { global } from './global';

@Injectable({
  providedIn: 'root'
})

export class CorreosService {
  public url: string;

  constructor(public _http: HttpClient, private _userService: UserService) { this.url = global.url; }

  public getCorreos() {
    let headers = new HttpHeaders().set('Authorization', this._userService.getToken());
    return this._http.get(`${this.url}contacto-data`, { headers: headers });
  }

}
