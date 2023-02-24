import { Component } from '@angular/core';
import { RequestPasswordReset } from '../../models/requestPasswordReset';
import { RequestPasswordResetService } from '../../services/request-password-reset.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
  providers: [RequestPasswordResetService]
})

export class ForgotPasswordComponent {
  public page_title:string;
  public rpr: RequestPasswordReset;
  public status: string;

  constructor(private _requestPRS: RequestPasswordResetService){
    this.page_title = "Restablecer contraseña";
    this.rpr = new RequestPasswordReset('');
    this.status ="";
  }

  onSubmit(form:any){

    this._requestPRS.requestReset(this.rpr).subscribe(
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
