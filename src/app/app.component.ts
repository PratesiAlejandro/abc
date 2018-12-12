import {enableProdMode} from '@angular/core';
import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';

enableProdMode();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
