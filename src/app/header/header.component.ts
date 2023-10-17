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
  public ruta:string='../../../assets/';
  estadoBandera = false;
  cartVacio=true;
  productos:CarritoClass[]=[];
  total:number=0;

  BanderaCambiada(valorBandera: boolean) {
      this.estadoBandera = valorBandera;
      this.productos = this.carritoService.obtenerProductos();
      // if(this.productos[0]){
      //   this.cartVacio=false
      // }
  }
  eliminar(i: number){
    this.carritoService.eliminarProducto(i)
  }
  calcular(){
    this.total=this.carritoService.calcularTotal();
    console.log(this.total);
  }
}
