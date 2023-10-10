import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductosService } from 'src/app/productos.service';
import { CarritoClass, ProductoClass } from 'src/app/models/producto';
import { CarritoService } from 'src/app/carrito.service';



@Component({
  selector: 'app-mostrar-producto',
  templateUrl: './mostrar-producto.component.html',
  styleUrls: ['./mostrar-producto.component.css']
})
export class MostrarProductoComponent {
  constructor(private productosServicios:ProductosService, private rutaActiva:ActivatedRoute, private carritoService:CarritoService){}
  public ruta:string='../../../assets/';
  productoCarrito : CarritoClass  = new CarritoClass;
  producto:ProductoClass=new ProductoClass;
  productos : ProductoClass[]=[];
  opcionSeleccionada!:string;
  cant!:number;
  ngOnInit() {
    this.traerProductos((this.rutaActiva.snapshot.params)['id']);
  }

  // Trae producto con el id mediante el servicio
  traerProductos(id:number) {
    this.productosServicios.recuperarTodos().subscribe(result =>{
      this.productos = result;
      this.productos.forEach(prod => {
        if(prod.id==id){
          this.producto = prod;
        }
      });

    })
  }
   agregarAlCarrito() {
    this.productoCarrito.id = this.producto.id;
    this.productoCarrito.img = this.producto.img;
    this.productoCarrito.precio = this.producto.precio
    this.productoCarrito.nombre = this.producto.nombre;
    this.productoCarrito.cantidad = this.cant;
    this.productoCarrito.talle = this.opcionSeleccionada;
    this.productoCarrito.total = this.cant*this.producto.precio;
    this.carritoService.agregarProducto(this.productoCarrito);

  }

}
