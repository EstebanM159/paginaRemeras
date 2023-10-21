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
  listaCarrito:CarritoClass[]=[];
  opcionSeleccionada!:string;
  cant!:number;
  index!:number;

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

    encontrarProducto(nom: string): number {
      this.listaCarrito = this.carritoService.obtenerProductos();
      const index = this.listaCarrito.findIndex(lc => lc.nombre === nom);
      return index; // Devolverá -1 si no se encontró el producto o el índice del producto si se encontró.
    }
   agregarAlCarrito() {
    if(this.encontrarProducto(this.producto.nombre) != -1){
      this.index = this.encontrarProducto(this.producto.nombre)
      this.carritoService.actualizarCompra(this.index);
    }else{
      this.productoCarrito.id = this.producto.id;
      this.productoCarrito.img = this.producto.img;
      this.productoCarrito.precio = this.producto.precio
      this.productoCarrito.nombre = this.producto.nombre;
      this.productoCarrito.cantidad = this.cant;
      this.productoCarrito.talle = this.opcionSeleccionada;
      // esto hace el push en el arreglo
      this.carritoService.agregarProducto(this.productoCarrito);
    }
  }

}
