import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalServiciosComponent } from '../modal-servicios/modal-servicios.component';
import { data } from './services';


@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})

export class ServiciosComponent implements OnInit {
  public data: any;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.data = data;
  }

  showModal(value: number) {
    const dialogRef = this.dialog.open(ModalServiciosComponent, {
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
