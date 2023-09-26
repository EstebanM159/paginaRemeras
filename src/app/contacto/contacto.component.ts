import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  open:boolean=false;
  telefono(){
    this.open=true;
  }
  email(){
    this.open=false
  }
}
