import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})

export class ServiciosComponent {
  constructor(public dialog: MatDialog) { }

  showModal() {
    const dialogRef = this.dialog.open(ModalComponent, { data: null });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("something here");
      }
    });

  }

}
