import { Component } from '@angular/core';
import { CarritoService } from '../carrito.service';
import { CarritoClass } from '../models/producto';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  constructor(private carritoService:CarritoService){}
  estadoBandera = false;
  productos:CarritoClass[]=[];

  BanderaCambiada(valorBandera: boolean) {
    this.estadoBandera = valorBandera;
    if(this.estadoBandera){
      this.productos = this.carritoService.obtenerProductos();
    }
  }

}
