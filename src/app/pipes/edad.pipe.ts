import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'edad'
})
export class EdadPipe implements PipeTransform {

  transform(value: any, args?: any): any {
   if(value < 30)
    {
      return "Joven";
    }
    if(value < 40 ){
      return "Adulto";
    }
    if(value < 60 ){
      return "Casi Jubilado";
    }
  }

}
