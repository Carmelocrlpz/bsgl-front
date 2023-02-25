import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalEspecialidadesComponent } from '../modal-especialidades/modal-especialidades.component';
import { data } from './dataEspecialidades';

@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.component.html',
  styleUrls: ['./especialidades.component.css']
})
export class EspecialidadesComponent implements OnInit{
  public data: any;

  constructor(public dialog: MatDialog){}

  ngOnInit(){
    this.data = data;
  }

  showModal(value: number) {
    const dialogRef = this.dialog.open(ModalEspecialidadesComponent, {
      data: this.data[value],
      height: "280px",
      width: "600px"
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        
      }
    });

  }

}
