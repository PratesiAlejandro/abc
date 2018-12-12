import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ServicioEmpleadoService } from '../../servicios/servicio-empleado.service';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {
  @Output() seEditoEmpleado: EventEmitter<any>= new EventEmitter<any>(); 
  @Input()
  public idEmpleado: any;

  public miServicioEmpleado:ServicioEmpleadoService;
  
    constructor( servicioEmpleado:ServicioEmpleadoService ) { 
      this.miServicioEmpleado = servicioEmpleado;
     }

  ngOnInit() {
  }

  public editarEmpleado() {    
    console.log("Id del empleado",this.idEmpleado);
//Borra al empleado y emite un evento indicando que se borró
  //  this.miServicioEmpleado.editarEmpleadoPromesa(this.idEmpleado).then(
    //  (borradoEmpleado) => { this.seEditoEmpleado.emit(this.idEmpleado); }
   // );
  
  } 

}
