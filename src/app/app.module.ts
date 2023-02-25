import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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


import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ConfirmComponent } from './confirm/confirm.component';
import { ModalServiciosComponent } from './modal-servicios/modal-servicios.component';
import { ModalEspecialidadesComponent } from './modal-especialidades/modal-especialidades.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PanelComponent } from './components/panel/panel.component';
import { ErrorComponent } from './components/error/error.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { MailsComponent } from './components/mails/mails.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';





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
    ConfirmComponent,
    ModalServiciosComponent,
    ModalEspecialidadesComponent,
    LoginComponent,
    RegisterComponent,
    PanelComponent,
    ErrorComponent,
    PasswordResetComponent,
    MailsComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    TableModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    appRoutingProviders
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
