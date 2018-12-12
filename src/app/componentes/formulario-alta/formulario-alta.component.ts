import { Component, OnInit } from '@angular/core';
import { ServicioEmpleadoService } from '../../servicios/servicio-empleado.service';
import { Empleado } from "../../clases/empleado";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FileUploader,FileUploaderOptions } from 'ng2-file-upload/ng2-file-upload'; //para usar la clase de subid de archivos


function validarSiEsUnNumero(input: FormControl) {
  
   /*  if (input.root.get('legajo') == null) {
         return null;
     }

     const verificar = Number(input.root.get('legajo').value)
     //console.log(verificar);
     return verificar ? null : { esUnNumero : true };
     
     */
    return true; 
    }


    const miUrl = 'http://localhost:80/Comanda/nexofoto/';

@Component({
  selector: 'app-formulario-alta',
  templateUrl: './formulario-alta.component.html',
  styleUrls: ['./formulario-alta.component.css']
})
export class FormularioAltaComponent implements OnInit {

  public nuevoEmpleado: Empleado;
  public tipos = ['Cocinero','Mozo','Bartender','Cervecero','Socio'];
  public miServicioEmpleado: ServicioEmpleadoService;
  public uploader:FileUploader = new FileUploader({url: miUrl, disableMultipart:false}); 
  public nombre = new FormControl('',[Validators.required]);
  public legajo = new FormControl('',[Validators.required]);
  public tipo = new FormControl('',[Validators.required]);
  public clave = new FormControl('',[Validators.required]);

  constructor( private servicioEmpleado: ServicioEmpleadoService, 
               private route: ActivatedRoute,
               private router: Router,
               private builder:FormBuilder) { 
    this.nuevoEmpleado = new Empleado;
    this.miServicioEmpleado = servicioEmpleado;
               }

  registroFormulario:FormGroup = this.builder.group(
                {
                  nombre:this.nombre,
                  legajo:this.legajo,
                  tipo:this.tipo,
                        
                }
              ) ; 

  ngOnInit() {
    this.uploader.onBeforeUploadItem = (item) => {
      item.withCredentials = false;
     }
     console.log(this.uploader); 
  }

  public guardarEmpleado() {
    //console.log("Se guarda una foto");
    //console.info("Mostrar fotos encontradas:",this.uploader.queue);
    let nombreFoto:string;
    if(this.uploader.queue[0]!=undefined)
    {
      nombreFoto = this.uploader.queue[0]._file.name;
      console.log("Nombre de la foto:",nombreFoto);
      this.nuevoEmpleado.EmpFoto = nombreFoto;
      this.uploader.uploadAll();
      this.uploader.onSuccessItem = (item, response, status, headers) => { 
        console.log("onSuccessItem " + status, item, headers);
        this.manejador(response);
      //console.log("Foto X a guardar:");
      //console.log(nombreFoto);
      //Se guarda el vehículo y cuando se guarda se llama a la grilla
      console.info("Nuevo empleado a guardar:", this.nuevoEmpleado);        
      this.miServicioEmpleado.guardarEmpleadoPromesa(this.nuevoEmpleado).then(
       () => { this.router.navigate(['/Listado']) }  );
      }
    }
    else
    {
// Si no se eligio imagen se carga el vehiculo con una foto por defecto 
      switch (this.nuevoEmpleado.EmpTipo) {
        //  public tipos = ['Cocinero','Mozo','Bartender','Cervecero','Socio'];
        case "Cocinero":
          this.nuevoEmpleado.EmpFoto = "pordefecto_cocinero.jpg"; 
          break;
        case "Mozo":
          this.nuevoEmpleado.EmpFoto = "pordefecto_mozo.jpg"; 
          break;
          case "Bartender":
          this.nuevoEmpleado.EmpFoto = "pordefecto_bartender.jpg"; 
          break;
          case "Cervecero":
          this.nuevoEmpleado.EmpFoto = "pordefecto_cervecero.jpg"; 
          break;
          case "Socio":
          this.nuevoEmpleado.EmpFoto = "pordefecto_socio.jpg"; 
          break;
        default:
          break;
      }     
      this.miServicioEmpleado.guardarEmpleadoPromesa(this.nuevoEmpleado).then(
        () => { this.router.navigate(['/Listado']) }  );
    }
    
  }

  manejador(r) {
    console.info("handler ran", r);
  } 

}
