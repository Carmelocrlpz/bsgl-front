import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'



import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { EspecialidadesComponent } from './especialidades/especialidades.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ConsultoriaComponent } from './consultoria/consultoria.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PanelComponent } from './components/panel/panel.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ErrorComponent } from './components/error/error.component';


//definir rutas
const appRoutes: Routes = [
	{ path: '', component: HomeComponent},
	{ path: '#nosotros', component: NosotrosComponent },
	{ path: '#especialidades', component: EspecialidadesComponent },
	{ path: '#servicios', component: ServiciosComponent },
	{ path: '#consultoria', component: ConsultoriaComponent },
	{ path: '#contacto', component: ContactoComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'logout/:sure', component: LoginComponent },
	{ path: 'password-reset', component: PasswordResetComponent },
	{ path: 'forgot-password', component: ForgotPasswordComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'panel', component: PanelComponent },	
	{ path: '**', component: ErrorComponent }
];

//exportarr configuracion
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);