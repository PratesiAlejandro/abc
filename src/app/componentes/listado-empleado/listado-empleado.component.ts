import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ServicioEmpleadoService } from '../../servicios/servicio-empleado.service';
import { Empleado } from '../../clases/empleado';

@Component({
  selector: 'app-listado-empleado',
  templateUrl: './listado-empleado.component.html',
  styleUrls: ['./listado-empleado.component.css']
})
export class ListadoEmpleadoComponent implements OnInit {
  @Output() seBorroEmpleadoEnviarAListado: EventEmitter<any>= new EventEmitter<any>(); 
  @Input()
  
  public listado: Array<any>;
  public unaEmpleadoParaCompartir:Empleado;
  public miServicioEmpleado:ServicioEmpleadoService;

  constructor( servicioEmpleado:ServicioEmpleadoService ) { 
    this.miServicioEmpleado = servicioEmpleado;
   }

  ngOnInit() {
  }

  public tomarEmpleadoBorradoEnListadoEmpleado(unId: string)
  {
//el evento emitido por el componente borrar-empleado es capturado por tomarEmpleadoBorradoEnListadoEmpleado que
// a su vez emite otro evento seBorroEmpleadoEnviarAListado que va a ser capturado en el evento Listado
    this.seBorroEmpleadoEnviarAListado.emit(unId); 
  }  


  /*public borrarEmpleado(idEmpleado:string) {    
    this.miServicioEmpleado.borrarEmpleadoPromesa(idEmpleado).then(
      (borradoEmpleado) => { this.seBorroEmpleado.emit(idEmpleado); }
    ); 
  
  } */

}
