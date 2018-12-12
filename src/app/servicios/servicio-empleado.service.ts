import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http.service';
import { Empleado } from '../clases/empleado';

@Injectable()
export class ServicioEmpleadoService {

 // miUrl: string = "http://localhost:80/apirest-empresa/empleado/" ;
 //miUrl: string = "http://localhost:80/ApiComanda/empleados"
 miUrl: string = "http://localhost:80/Comanda/empleado/"
  constructor( public miserviciohttp:MiHttpService ) { }

  public listarEmpleadosPromesa(): Promise<Array<Empleado>> {
    let promesa: Promise<Array<Empleado>> = new Promise((resolve, reject) =>
        {
          this.miserviciohttp.dameTodasLasPromesas(this.miUrl)        
              .then(datos=>{  console.log(datos);
                              let miArray: Array<Empleado> = new Array<Empleado>();
                              for (let unDato of datos) {
                                console.log(unDato.EmpNombre);      
                                miArray.push(new Empleado(unDato.EmpNro, unDato.EmpNombre, unDato.EmpLegajo, unDato.EmpTipo, unDato.EmpClave, unDato.EmpFoto, unDato.EmpFechaRegistro, unDato.EmpUltimoLogin, unDato.EmpEstado, unDato.EmpCantidadOperaciones));    
                              }
                              resolve(miArray);
                            })
              .catch(error=>{console.log(error);});
        }
      );
     return promesa;
    }
  
  public borrarEmpleadoPromesa(idEmpleado:string): Promise<string> {
      
    let promesaBaja: Promise<string> = new Promise((resolve,reject) =>
      {
        this.miserviciohttp.teDoyUnaPromesaBaja(this.miUrl,idEmpleado)
                  .then(datos=>{ console.log("Datos Baja:",datos);
                                 resolve(idEmpleado);
                               } 
                        )
                   .catch(error=>{console.log("Error Baja:",error);});      
      }
    )
    return promesaBaja;
    }
  
  public guardarEmpleadoPromesa(unEmpleado:Empleado): Promise<Empleado> {
      
          let promesaAlta: Promise<Empleado> = new Promise((resolve,reject) =>
              {
                this.miserviciohttp.teDoyUnaPromesaAlta(this.miUrl,unEmpleado)
                        .then(datos=>{ console.log("Datos Alta:",datos);
                                       resolve(unEmpleado);
                                     } 
                             )
                        .catch(error=>{console.log("Error Alta:",error);});      
              }
            )
            return promesaAlta;
          }  


}
