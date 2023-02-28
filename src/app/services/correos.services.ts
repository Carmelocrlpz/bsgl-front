import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Correos } from '../models/correos';
import { UserService } from './user.service'
import { global } from './global';
import Swal from 'sweetalert2';



@Injectable({
  providedIn: 'root'
})

export class CorreosService {
  public url: string;

  // private imgLoad: Swal = Swal.mixin({
  //     toast: false,
  //     position: 'center',
  //     showConfirmButton: false,
  //     timerProgressBar: true
  // });

  constructor(public _http: HttpClient, private _userService: UserService) { this.url = global.url; }

  public getCorreos() {
    let headers = new HttpHeaders().set('Authorization', this._userService.getToken());
    return this._http.get(`${this.url}contacto-data`, { headers: headers });
  }

  public loadStart(): void {
    Swal.fire({
      allowOutsideClick: false,
      padding: '0em',
      backdrop: `
        rgba(0,0,0,0.4)
        url("../assets/GIF/loading.gif")
        center
        no-repeat
      `,
      showConfirmButton: false,

      imageWidth: 400,
      imageHeight: 200,
    });
  }

  public loadEnd() {
    Swal.close();
  }

}
