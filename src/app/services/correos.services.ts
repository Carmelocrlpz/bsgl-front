import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Correos } from '../models/correos';
import { global } from './global';

@Injectable({
  providedIn: 'root'
})

export class CorrosService {
    public url:string;

    constructor(public _http: HttpClient) { this.url = global.url;}

}
