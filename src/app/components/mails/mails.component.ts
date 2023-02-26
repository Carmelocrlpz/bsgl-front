import { Component, OnInit, DoCheck } from '@angular/core';
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
 /* response: any;
  data: any;*/

  public url;
  public mails!: Array<any>;
  public page_title;
   public identity:any;
   public token:any;

  constructor( private _userService: UserService,private _correosService: CorreosService) {
     this.loadUser();
    this.url = global.url;
    this.page_title="tabla xD"
    
  }

  ngOnInit() {
    this.getmails();


  }

  getmails(){
    this._correosService.getCorreos().subscribe(
      response => {

         this.mails = response.data;
          
          
        
        //


      },error =>{
        
      }

      );
  }


   ngDoCheck(){
   this.loadUser();
   }

    loadUser(){
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }



}
