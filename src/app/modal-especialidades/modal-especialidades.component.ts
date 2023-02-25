import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-modal-especialidades',
  templateUrl: './modal-especialidades.component.html',
  styleUrls: ['./modal-especialidades.component.css']
})
export class ModalEspecialidadesComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    //
  }

}
