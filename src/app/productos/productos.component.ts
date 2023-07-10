import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { ProductoClass } from '../models/producto';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})


export class ProductosComponent implements OnInit{
  productos : ProductoClass[]=[];
  constructor(private productosServicio:ProductosService){}
  ngOnInit() {
    this.recuperarTodos();
  }

  recuperarTodos() {
    this.productosServicio.recuperarTodos().subscribe((result:ProductoClass[]) => {
      this.productos = result;
    })
  }

 seleccionar(id:number) {
    this.productosServicio.seleccionar(id).subscribe((result:any) => this.productos = result[id]);
    console.log(this.productos);
  }
}

