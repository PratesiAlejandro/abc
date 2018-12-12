import { Component, OnInit, Input } from '@angular/core';
import { ImagenRenderizadaComponent } from '../imagen-renderizada/imagen-renderizada.component';
import { ServicioEmpleadoService } from '../../servicios/servicio-empleado.service';
//import { Empleado } from '../../clases/empleado';


@Component({
  selector: 'app-listado-smart-table',
  templateUrl: './listado-smart-table.component.html',
  styleUrls: ['./listado-smart-table.component.css']
})
export class ListadoSmartTableComponent implements OnInit {

  public listadoCompartirPorSmart: Array<any>;
  public miServicioEmpleado:ServicioEmpleadoService;

  constructor( servicioEmpleado:ServicioEmpleadoService ) { 
    this.miServicioEmpleado = servicioEmpleado;
 
   }

  settings = {
    columns: {
      nombre: {
        title: 'Nombre',
        filter: false,                
      },
      legajo: {
        title: 'Legajo',
        filter: false,
      },
      tipo: {
        title: 'Tipo',
        filter: false,
        //type: 'custom',
        //renderComponent: ImagenRenderizadaComponent,
      },
      edad: {
        title: 'Edad',
        filter: false,
      },
      foto: {
        title: 'Foto',
        filter: false,
          type : 'html',
           valuePrepareFunction: (value) => { 
             return '<img width="80" class="img-circle" src="http://localhost:80/apirest-empresa/fotos/'+ value +'" alt="">'; 
          }
        /*
        type: 'custom',
        renderComponent: ImagenRenderizadaComponent,
        //title: 'Foto',
        //type: 'html',
        //valuePrepareFunction: (value) => { return '<img scr="http://localhost/apirest-empresa/fotos/horacio_11111.jpg" class="fotoGrilla"/>' }
        //valuePrepareFunction: (value) => { return '<img scr="http://localhost/apirest-empresa/fotos/horacio_11111.jpg"/>' }
    */  
      }
    }
  };

  ngOnInit() {
    this.llamaServicePromesa();
  }

  public llamaServicePromesa(){
    //console.log("llamaServicePromesa");
    this.miServicioEmpleado.listarEmpleadosPromesa().then(
      (listadoPromesa) => { this.listadoCompartirPorSmart = listadoPromesa;}
    );
  }

}
