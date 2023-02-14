import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { data } from './services';


@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})

export class ServiciosComponent implements OnInit{
  public data: any;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.data = data;
  }

  showModal() {
    const dialogRef = this.dialog.open(ModalComponent, { data: {titulo: "", descripcion: "" } });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("something here");
      }
    });

  }

}
