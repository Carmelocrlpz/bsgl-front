import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { EspecialidadesComponent } from './especialidades/especialidades.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ConsultoriaComponent } from './consultoria/consultoria.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ModalComponent } from './modal/modal.component';

import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    EspecialidadesComponent,
    ServiciosComponent,
    ConsultoriaComponent,
    ContactoComponent,
    NosotrosComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    TableModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
