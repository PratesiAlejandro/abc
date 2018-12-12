import { Injectable } from '@angular/core';
import { Http, Response  } from "@angular/http";
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MiHttpService {

  constructor(public http:Http) { }

  dameTodasLasPromesas(unaUrl:string){
    
        return this.http.get(unaUrl).toPromise().then(this.extraerDatos).catch(this.manejadorError);
    
      }
  
  teDoyUnaPromesaBaja(unaUrl:string, valorId:string){
        console.log("Te doy una promesa baja:",valorId);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.delete(unaUrl + valorId,options).toPromise().then(this.extraerDatos).catch(this.manejadorError);
    
      }    

  teDoyUnaPromesaAlta(unaUrl:string, objetoAlta:any){
        console.log("Te doy una promesa alta:",objetoAlta);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(unaUrl,objetoAlta,options).toPromise().then(this.extraerDatos).catch(this.manejadorError);
    
      }        

  manejadorError(error:Response|any){
        //return error;
        console.error(error.message || error);
        return Promise.reject(error.message || error);
      }
    
  extraerDatos(respuesta:Response){
        return respuesta.json()||{};
      }         

}
