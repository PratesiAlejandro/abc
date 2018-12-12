import { Component, OnInit } from '@angular/core';
import { ServicioEmpleadoService } from '../../servicios/servicio-empleado.service';
import { Empleado } from '../../clases/empleado';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  public listadoParaCompartir: Array<any>;
  public miServicioEmpleado:ServicioEmpleadoService;

  constructor( servicioEmpleado:ServicioEmpleadoService ) { 
   this.miServicioEmpleado = servicioEmpleado;
   this.llamaServicePromesa();

  }

  ngOnInit() {
  }

  public llamaServicePromesa(){
    //console.log("llamaServicePromesa");
    this.miServicioEmpleado.listarEmpleadosPromesa().then(
      (listadoPromesa) => { this.listadoParaCompartir = listadoPromesa;}
    );
  }

  public tomarEmpleadoBorrado(unId: string)
  {
// una vez que este método captura el evento que es enviado por el componente listado-empleado llama al servicio que recupera 
// a todos los empleados y los lista    
    this.llamaServicePromesa(); 
  }  

}
