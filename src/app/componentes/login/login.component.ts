import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { MiHttpLoginService } from '../../servicios/login/mi-http-login.service';
import { Empleado } from '../../clases/empleado';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  unEmpleado: Empleado = new Empleado();
  
  activado = false;
  public tipos = ['Cocinero','Mozo','Bartender','Cervecero','Socio'];
  url: string = 'http://localhost:80/Comanda/ingreso/';

  constructor(  private router: Router, 
                private servicioLogin: MiHttpLoginService,
                private builder:FormBuilder ) { }

  nombre = new FormControl('',[Validators.required]);
  tipo = new FormControl('',[Validators.required]);
  clave = new FormControl('',[Validators.required]);
              
                registroFormulario:FormGroup = this.builder.group(
                  {
                    nombre:this.nombre,
                    tipo:this.tipo,
                    clave:this.clave
                  }
                ) ;               

  ngOnInit() {
  }

  public enviarIngreso() {
    //se borra el token del usuario de la sesión anterior    
        localStorage.removeItem('token');  // esta bien que la comente  ?
        this.activado = false;  
    this.servicioLogin.post(
      this.url, { datosLogin: {
                              nombre: this.unEmpleado.EmpNombre,
                              tipo: this.unEmpleado.EmpTipo,
                              clave: this.unEmpleado.EmpClave
        }
      })
      .then(data => {
        console.info("data>>>", data);
        //if ( data.token ) 
        if (data == undefined) {

            this.activado = true;
         // alert("Empleado inexistente. Ingrese nuevamente.")
       // this.msj = "Error al loguearse";
        }
        else {
          localStorage.setItem('token', data.token);
          this.router.navigateByUrl("/Listado");
        }

      })
      .catch(e => {
        console.info(e);
      });
  }
}
