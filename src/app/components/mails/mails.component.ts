import { Component, OnInit } from '@angular/core';
import { Correos } from '../../models/correos';
import { CorreosService } from '../../services/correos.services';
import { global } from '../../services/global';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-mails',
  templateUrl: './mails.component.html',
  styleUrls: ['./mails.component.css'],
  providers:[CorreosService,UserService]
})
export class MailsComponent implements OnInit {
  response: any;
  data: any;

  public url;
  public mails!: Array<Correos>;
  public page_title;
  public identity:any;
  public token:any;

  constructor( private _userService: UserService,private _correosService: CorreosService) {

    this.url = global.url;
    this.page_title="tabla xD"

  }

  ngOnInit() {

    if(localStorage.identity&&localStorage.token) {
      this._correosService.loadStart();
      this._correosService.getCorreos().subscribe(
        response => {
          if (response) {
            this.response = response;
            this.data = this.response.data;
            this._correosService.loadEnd();
          }
    //this.getmails();


        },
        err => { }
      );
    }
  }

  /*getmails(){
    this._correosService.getCorreos().subscribe(
      response => {

        this.mails = response.data;
      },error =>{

      }

      );
  }*/





}
