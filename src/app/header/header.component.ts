import { Component, ElementRef, OnInit, Renderer2, ViewChild, DoCheck } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [UserService]
})
export class HeaderComponent implements OnInit {
  public identity: any;
  public token: any;


  @ViewChild('navigationbar') navigationbar!: ElementRef;
  public getScreenWidth!: any;

  constructor(private router: Router, private renderer2: Renderer2, public _userService: UserService, ) {
    this.loadUser();
  }




  ngOnInit() {
    //this.getScreenWidth = window.innerWidth;
  }

  ngAfterViewInit() {
    this.cambiarMenuMovil();
    this.loadUser();
    

  }

  addMyClass() {
    //this.myButton.nativeElement.classList.add("my-class"); //BAD PRACTICE
    this.renderer2.addClass(this.navigationbar.nativeElement, "fixed-bottom");
  }

  removeMyClass() {
    //this.navigationbar.nativeElement.classList.remove("my-class"); //BAD PRACTICE
    this.renderer2.removeClass(this.navigationbar.nativeElement, "sticky-top");
    this.renderer2.removeClass(this.navigationbar.nativeElement, "nav-top");
  }

  cambiarMenuMovil() {
    if (this.getScreenWidth < 500) {
      this.removeMyClass();
      this.addMyClass();
    } else {

    }
  }

  ngDoCheck() {
    this.loadUser();
  }

  loadUser() {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  closeSession() {
    this.router.navigate(['logout/1']);
  }

}
