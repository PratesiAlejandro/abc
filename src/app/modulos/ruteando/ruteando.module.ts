//Modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { PrincipalComponent } from '../../componentes/principal/principal.component';
import { ErrorComponent } from '../../componentes/error/error.component';
import { ListadoComponent } from '../../componentes/listado/listado.component';
import { LoginComponent } from '../../Componentes/login/login.component';
import { FormularioAltaComponent } from '../../Componentes/formulario-alta/formulario-alta.component';
import { ListadoSmartTableComponent } from '../../Componentes/listado-smart-table/listado-smart-table.component';
import { HomeComponent } from '../../componentes/home/home.component';
//import { ImagenRenderizadaComponent } from '../../Componentes/imagen-renderizada/imagen-renderizada.component';

//Servicio verificador de usuario logueado 
import { VerificarJwtService } from '../../servicios/login/verificar-jwt.service';


const MiRuteo = [
  {path: '' , component: HomeComponent},
  {path: 'Home' , component: HomeComponent},
  {path: 'Principal' , component: PrincipalComponent},
  {path: 'Listado' , component: ListadoComponent},
  {path: 'ListadoSmart' , component: ListadoSmartTableComponent},
  {path: 'Alta' ,
       canActivate: [VerificarJwtService],
       component: FormularioAltaComponent},
  {path: 'Login' , component: LoginComponent},    
  {path: '**' , component: ErrorComponent},
  {path: 'error' , component: ErrorComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(MiRuteo)
  ],
  providers: [VerificarJwtService],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class RuteandoModule { }
