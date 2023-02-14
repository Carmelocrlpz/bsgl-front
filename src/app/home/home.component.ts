import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  public writing!: any;
  public myTimeout!: any;

  @ViewChild('slogan') slogan!: ElementRef;

  constructor(private renderer2: Renderer2) { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.escribirPantalla("NUESTRO OBJETIVO ES BRINDAR LA TECNOLOGÍA PARA AUTOMATIZAR SUS PROCESOS");
    setInterval(() => this.validar(), 8000);
  }

  escribirPantalla(slo: string) {
    let arraySlo = slo.split('');
    let i = 0;
    let elemntSlogan = this.slogan.nativeElement;
    let printStr = setInterval(function() {
      //this.renderer2.setProperty(this.slogan, 'innerHTML', arraySlo[i]);
      elemntSlogan.innerHTML += arraySlo[i];
      i++;
      if (i === arraySlo.length) {
        clearInterval(printStr);
        i = 0;
      }
    }, 100);
  }

  /********************BUCLE slogan****************************************/
  myStopFunction() { clearTimeout(this.myTimeout); }

  validar() {
    let mielemento = this.slogan.nativeElement.innerHTML;
    if (!mielemento) {
      this.escribirPantalla("NUESTRO OBJETIVO ES BRINDAR LA TECNOLOGÍA PARA AUTOMATIZAR SUS PROCESOS");
      this.myStopFunction();
      this.myTimeout = setTimeout(() => this.repeticion(), 7800);
    } else {
      this.slogan.nativeElement.innerHTML = "";
    }
  }

  repeticion() {
    setTimeout(() => this.validar(), 200);
  }
  /************************************************************/





}
