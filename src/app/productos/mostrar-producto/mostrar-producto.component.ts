import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductosService } from 'src/app/productos.service';
import { ProductoClass } from 'src/app/models/producto';



@Component({
  selector: 'app-mostrar-producto',
  templateUrl: './mostrar-producto.component.html',
  styleUrls: ['./mostrar-producto.component.css']
})
export class MostrarProductoComponent {
  constructor(private productosServicios:ProductosService, private rutaActiva:ActivatedRoute){}
  public ruta:string='../../../assets/';
  producto:ProductoClass=new ProductoClass;
   productos : ProductoClass[]=[];
  ngOnInit() {
    this.traerProductos((this.rutaActiva.snapshot.params)['id']);
  }
  traerProductos(id:number) {
    this.productosServicios.recuperarTodos().subscribe(result =>{
      this.productos = result;
    //   for (let i = 0; i < this.productos.length; i++) {
    //   console.log(this.productos[i].id);
    //   if(id==this.productos[i].id){
    //     console.log("Es correcto");
    //   }
    // }
    this.productos.forEach(prod => {
        // console.log(prod)
        if(prod.id==id){
          this.producto = prod;
        }
    });

  });
  }

}
