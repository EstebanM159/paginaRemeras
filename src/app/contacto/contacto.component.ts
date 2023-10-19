import { Component } from '@angular/core';
import { ContactoClass } from '../models/contacto';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  clienteContacto:ContactoClass=new ContactoClass;
  open:boolean=false;
  telefono(){
    this.open=true;
  }
  email(){
    this.open=false
  }
  a(){
    console.log(this.clienteContacto);
  }
}
