import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'


import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
//import { AppComponent } from './app.component';
//import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
/*import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { EspecialidadesComponent } from './especialidades/especialidades.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ConsultoriaComponent } from './consultoria/consultoria.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';*/
import { PanelComponent } from './components/panel/panel.component';
import { ErrorComponent } from './components/error/error.component';

//definir rutas
const appRoutes: Routes = [
	{ path: '', component: HeaderComponent},
	{ path: 'login', component: LoginComponent },
	{ path: 'logout/:sure', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'panel', component: PanelComponent },
	{ path: '**', component: ErrorComponent }
];
//exportarr configuracion
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);