import { Directive,ElementRef , Renderer2,OnInit} from '@angular/core';

@Directive({
  selector: '[appOperario]'
})
export class OperarioDirective {

constructor(private obj:ElementRef, private renderizador: Renderer2) { }

ngOnInit():void{

  this.renderizador.setStyle(this.obj.nativeElement,"backgroundColor","orange");
  this.renderizador.setStyle(this.obj.nativeElement,"font-family","Arial Black");
  this.renderizador.setStyle(this.obj.nativeElement,"font-size","30px");

  //
 //   this.renderizador.setProperty(this.obj.nativeElement,"textContent","aca le seteo parametros"); // pone en el contenido lo que pongo entre parentesis sino queda vacio
   
 }
}
