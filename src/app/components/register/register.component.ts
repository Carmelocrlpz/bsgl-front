import { Component, DoCheck } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent {
    public identity:any;
  public token:any;
  public page_title: string;
  public user: User;
  public status: string;
  public erroresv: string;
  public errorname: string;
  public erroremail: string;
  public errorpassword: string;
  public errorpassword_confirmation: string;
  
  constructor(
    private _userService: UserService
  ){
      this.page_title='Registra a un usuario';
      this.user = new User(0,'','','','');
      this.status = "";
      this.erroresv = "";
      this.errorname = "";
      this.erroremail = "";
      this.errorpassword = "";
      this.errorpassword_confirmation = "";
      this.loadUser();
    }

  onSubmit(form:any){
    this._userService.register(this.user).subscribe(
      response => {
        if(response.status == "succes"){
          this.status = response.status;
          form.reset();
          
        }else{
            this.status = 'error1';
        }        
      },
      error => {
        this.status = 'error';
        
        
        this.errorname= error.error.errors.name;
        this.erroremail = error.error.errors.email;
        this.errorpassword = error.error.errors.password;
        this.errorpassword_confirmation = error.error.errors.password_confirmation;
        this.erroresv = error.error.message;
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
