import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit{
  productos:any;
  prod={
    id:0,
    descripcion:"",
    precio:0
  }

  constructor(private productosServicio:ProductosService){}
  ngOnInit() {
    this.recuperarTodos();
  }

  recuperarTodos() {
    this.productosServicio.recuperarTodos().subscribe((result:any) => this.productos = result);
  }

  seleccionar(id:number) {
    this.productosServicio.seleccionar(id).subscribe((result:any) => this.prod = result[0]);
  }
}
