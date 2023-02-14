import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
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
    const dialogRef = this.dialog.open(ModalComponent, {data: this.data[value]});
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("something here");
      }
    });

  }

}
