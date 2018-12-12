//Modulos
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Directive } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from '@angular/router';
import { RuteandoModule } from './modulos/ruteando/ruteando.module';
import { JwtModule } from './modulos/jwt/jwt.module';
import { Ng2SmartTableModule } from 'ng2-smart-table'; //Modulo para el Smart Table

//Componentes
import { AppComponent } from './app.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { ErrorComponent } from './componentes/error/error.component';
import { BarraDeMenuComponent } from './componentes/barra-de-menu/barra-de-menu.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { ListadoEmpleadoComponent } from './componentes/listado-empleado/listado-empleado.component';
import { BorrarEmpleadoComponent } from './Componentes/borrar-empleado/borrar-empleado.component';
import { LoginComponent } from './Componentes/login/login.component';
import { FormularioAltaComponent } from './Componentes/formulario-alta/formulario-alta.component';
import { ListadoSmartTableComponent } from './Componentes/listado-smart-table/listado-smart-table.component';
import { ImagenRenderizadaComponent } from './Componentes/imagen-renderizada/imagen-renderizada.component';

//Servicios
import { MiHttpService } from './servicios/mi-http.service';
import { ServicioEmpleadoService } from './servicios/servicio-empleado.service';
// Servicios para login
import { MiHttpLoginService } from './servicios/login/mi-http-login.service';
import { AutService } from './servicios/login/aut.service';
//import { VerificarJwtService } from './servicios/login/verificar-jwt.service';

//Directivas y módulos para la subida de fotos
import { FileSelectDirective, FileDropDirective, FileUploader, FileUploadModule  } from 'ng2-file-upload/ng2-file-upload';
import { EdadPipe } from './pipes/edad.pipe';
import { OperarioDirective } from './directivas/operario.directive';
import { JefeDirective } from './directivas/jefe.directive';
import { EditarEmpleadoComponent } from './componentes/editar-empleado/editar-empleado.component';
import { HomeComponent } from './componentes/home/home.component';
import { NavBarGeneralComponent } from './componentes/nav-bar-general/nav-bar-general.component';
import { ReservarMesaComponent } from './componentes/reservar-mesa/reservar-mesa.component';
import { NavBarLoginComponent } from './componentes/nav-bar-login/nav-bar-login.component';
import { AlertasComponent } from './componentes/alertas/alertas.component';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    ErrorComponent,
    BarraDeMenuComponent,
    ListadoComponent,
    ListadoEmpleadoComponent,
    BorrarEmpleadoComponent,
    LoginComponent,
    FormularioAltaComponent,
    ListadoSmartTableComponent,
    ImagenRenderizadaComponent,
    EdadPipe,
    OperarioDirective,
    JefeDirective,
    EditarEmpleadoComponent,
    HomeComponent,
    NavBarGeneralComponent,
    ReservarMesaComponent,
    NavBarLoginComponent,
    AlertasComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RuteandoModule,
    ReactiveFormsModule,
    HttpModule,
    JwtModule,
    FileUploadModule,
    Ng2SmartTableModule
  ],
  entryComponents: [ImagenRenderizadaComponent],
  providers: [MiHttpService, ServicioEmpleadoService, 
              MiHttpLoginService, AutService],
              //VerificarJwtService],
  bootstrap: [AppComponent]
})
export class AppModule { }
