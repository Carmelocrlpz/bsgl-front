import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit{

  public token!: any;
  public ce!:any;
  public page_title: string;
  constructor(private activateRoute: ActivatedRoute){
    this.page_title="Restablece tu contraseña";
  }

  ngOnInit(){
    // first way
    this.token = this.activateRoute.snapshot.queryParamMap.get("token");
    this.ce = this.activateRoute.snapshot.queryParamMap.get("email");
    // second way
   /* this.activateRoute.queryParamMap.subscribe(queryParams => {
       this.token = queryParams.get("token");
       this.ce = queryParams.get("email");
    });*/

    console.log(this.token);
    console.log(this.ce);
  }


  onSubmit(form:any){
  }


  

}
