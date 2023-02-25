import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-modal-servicios',
  templateUrl: './modal-servicios.component.html',
  styleUrls: ['./modal-servicios.component.css']
})
export class ModalServiciosComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  //  
  }

}
