import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})


export class ProductosComponent implements OnInit{
  productos=[];
  constructor(private productosServicio:ProductosService){}
  ngOnInit() {
    this.recuperarTodos();
  }

  recuperarTodos() {
    this.productosServicio.recuperarTodos().subscribe((result:any) => {
      console.log(result);
      this.productos = result;
    })
  }

}
