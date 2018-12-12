import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ServicioEmpleadoService } from '../../servicios/servicio-empleado.service';

@Component({
  selector: 'app-borrar-empleado',
  templateUrl: './borrar-empleado.component.html',
  styleUrls: ['./borrar-empleado.component.css']
})
export class BorrarEmpleadoComponent implements OnInit {
  @Output() seBorroEmpleado: EventEmitter<any>= new EventEmitter<any>(); 
  @Input()
  public idEmpleado: any;

  public miServicioEmpleado:ServicioEmpleadoService;
  
    constructor( servicioEmpleado:ServicioEmpleadoService ) { 
      this.miServicioEmpleado = servicioEmpleado;
     }

  ngOnInit() {
  }

  public borrarEmpleado() {    
    console.log("Id del empleado",this.idEmpleado);
//Borra al empleado y emite un evento indicando que se borró
    this.miServicioEmpleado.borrarEmpleadoPromesa(this.idEmpleado).then(
      (borradoEmpleado) => { this.seBorroEmpleado.emit(this.idEmpleado); }
    );
  
  } 

}
