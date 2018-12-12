import { Directive,ElementRef , Renderer2,OnInit} from '@angular/core';

@Directive({
  selector: '[appJefe]'
})
export class JefeDirective {

  constructor(private obj:ElementRef, private renderizador: Renderer2) {
    
  }


 ngOnInit():void{

  this.renderizador.setStyle(this.obj.nativeElement,"backgroundColor","yellow");
  this.renderizador.setStyle(this.obj.nativeElement,"font-family","Lucida Console");
  this.renderizador.setStyle(this.obj.nativeElement,"font-size","30px");

  //Comic Sans MS
 //   this.renderizador.setProperty(this.obj.nativeElement,"textContent","aca le seteo parametros"); // pone en el contenido lo que pongo entre parentesis sino queda vacio
   
 }
}
