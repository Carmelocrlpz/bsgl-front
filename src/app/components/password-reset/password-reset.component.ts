import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PasswordReset } from '../../models/passwordreset';
import { PasswordresetService } from '../../services/passwordreset.service';


@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css'],
  providers: [PasswordresetService]
})
export class PasswordResetComponent implements OnInit{

  public token!: any;
  public ce!:any;
  public page_title: string;
  public passwordreset: PasswordReset;
  public status: string;
  @ViewChild('messagesuccess') messagesuccess!: ElementRef;

  constructor(private activateRoute: ActivatedRoute, private _passwordresetService: PasswordresetService, private renderer2: Renderer2){
    this.page_title="Restablece tu contraseña";
    this.token = this.activateRoute.snapshot.queryParamMap.get("token");
    this.ce = this.activateRoute.snapshot.queryParamMap.get("email");

    this.passwordreset = new PasswordReset(this.token,this.ce,'','');
     this.status = "";
  }

  ngOnInit(){
    // first way
    
    // second way
   /* this.activateRoute.queryParamMap.subscribe(queryParams => {
       this.token = queryParams.get("token");
       this.ce = queryParams.get("email");
    });*/

  }



    onSubmit(form:any){
      this._passwordresetService.resetPass(this.passwordreset).subscribe(
        response => {
        
          if(response.status == "success"){
            this.status = response.message;
            //this.messagesuccess.nativeElement.innerHTML=`<a [routerLink]="['/login']">Inicia sesíon aqui!</a>`;
            form.reset();
          }else{
              this.status = 'error1';
          }    
        },
        error => {
          this.status = 'error';/* 
          this.errorname= error.error.errors.name;
          this.erroremail = error.error.errors.email;
          this.errorpassword = error.error.errors.password;
          this.errorpassword_confirmation = error.error.errors.password_confirmation;
          this.erroresv = error.error.message;*/
        }
      );
    }



  

}
