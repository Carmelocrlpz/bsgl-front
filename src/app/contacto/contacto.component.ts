import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  contactForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
      this.contactForm = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        telefono: ['', Validators.required],
        message: ['', Validators.required]
      });
    }

    onSubmit() {
    // implement the form submission logic here
  }

}
