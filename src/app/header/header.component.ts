import { Component, ElementRef, OnInit, Renderer2, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  @ViewChild('navigationbar') navigationbar!: ElementRef;
  public getScreenWidth!:any;

  constructor( private renderer2: Renderer2){

  }


  

  ngOnInit(){
    this.getScreenWidth = window.innerWidth;
    
  }

  ngAfterViewInit() {
    this.cambiarMenuMovil();
      
  }

  addMyClass(){
     //this.myButton.nativeElement.classList.add("my-class"); //BAD PRACTICE
     this.renderer2.addClass(this.navigationbar.nativeElement, "fixed-bottom");
   }

   removeMyClass(){
     //this.navigationbar.nativeElement.classList.remove("my-class"); //BAD PRACTICE
     this.renderer2.removeClass(this.navigationbar.nativeElement, "sticky-top");
     this.renderer2.removeClass(this.navigationbar.nativeElement, "nav-top");
   }

   cambiarMenuMovil(){
      if(this.getScreenWidth < 500){
        this.removeMyClass();
      this.addMyClass();
      }else{

      }
   }



}



