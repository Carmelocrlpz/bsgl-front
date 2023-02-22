import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ContactoService } from '../services/contacto.service';
import { Contacto } from '../models/contacto';
import { ConfirmComponent } from '../confirm/confirm.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  contactForm: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private contactoService: ContactoService, public dialog: MatDialog) {

    this.contactForm = this.formBuilder.group({
      "name": new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s\ ]{0,45}[^\s]$/)]),
      'email': new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      'telefono': new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]),
      'mensaje': new FormControl('', Validators.compose([Validators.pattern('^[^-\s][0-9A-Za-z-záéíóúáéíóúÁÉÍÓÚñÑ.,?¿":@¡!# \n]+'), Validators.required]))
    });

  }

  onSubmit() {
    console.log(this.contactForm);
    if(
      this.contactForm.value.name == '' ||
      this.contactForm.value.email == '' ||
      this.contactForm.value.telefono == '' ||
      this.contactForm.value.mensaje == '') {
        this.openModal("Mensaje","favor de llenar todos los campos");
        return;
    }

    this.contactoService.register(this.contactForm.value).subscribe(
    response => {
      console.log(response);
      if(response.code == 200){
        this.openModal("Confirmación","El correo fue enviado exitosamente.");
        this.contactForm.reset();
      }
    },
    error => {
    this.openModal("Ups...","Tenemos problemas al enviar el correo, favor de intentar nuevamente");
    });
  }


  openModal(titulo: string, mensaje: string) {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      data: {
        titulo: titulo,
        mensaje: mensaje
      },
      height: "250px",
      width: "300px"
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("something here");
      }
    });
  }
}
