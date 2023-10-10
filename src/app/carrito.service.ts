import { Injectable } from '@angular/core';
import { CarritoClass } from './models/producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  carritoVacio:boolean=true;
  constructor() { }
  productos: CarritoClass[] = []; // Definir el tipo como un arreglo de ProductoClass


  agregarProducto(producto: CarritoClass) { // Especificar el tipo de producto
    this.productos.push(producto);
  }

  eliminarProducto(index:number) {
    this.productos.splice(index, 1);
  }

  obtenerProductos() {
    return this.productos;
  }
}
  // calcularTotal() {
  //   return this.productos.reduce((total, producto) => total + producto.precio, 0);
  // }

