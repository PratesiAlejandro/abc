import { Component, Input, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

/*@Component({
  selector: 'app-imagen-renderizada',
  templateUrl: './imagen-renderizada.component.html',
  styleUrls: ['./imagen-renderizada.component.css']
})
export class ImagenRenderizadaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}*/

@Component({
  template: '<img [src]="renderValue" class="fotoGrilla" />',
  //template: '{{renderValue}}',
})
export class ImagenRenderizadaComponent implements ViewCell, OnInit {

  
  renderValue: string;
  
  @Input() value: string | number;
  @Input() rowData: any;
  
  constructor() {  
  }

  ngOnInit() {
    this.renderValue = "http://localhost:80/comanda/fotos/"+this.value.toString();
    //console.log("Imagen renderizada",this.renderValue)
  }


}
