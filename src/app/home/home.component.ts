import { Component, ElementRef, OnInit, Renderer2, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
 
 @ViewChild('slogan') slogan!: ElementRef;
 public writing!:any;

 

   constructor( private renderer2: Renderer2){

   }

  ngOnInit(){}

  ngAfterViewInit() {

    //this.renderer.setProperty(element, 'innerHTML', newContent); 
    /*this.writing = str => { 
      arrFromStr = str.split('');
      let i = 0;
      let slogan = document.getElementById('slogan');

      let printStr = setInterval(function(){ 
        slogan.innerHTML += arrFromStr[i];
        i++;
        if (i === arrFromStr.length){
        clearInterval(printStr);
        }
      },100);
    };*/
    
  }


  escribirPantalla(slo:string){
    let arraySlo = slo.split('');
    let i=0;
    let elemntSlogan = this.slogan.nativeElement;
    let printStr = setInterval(function(){
      
    },100);
  }

  

}
