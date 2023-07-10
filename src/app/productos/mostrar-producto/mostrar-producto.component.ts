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
  public ruta:string='../../../assets/';
  producto:ProductoClass=new ProductoClass;
  ngOnInit() {
    this.seleccionar((this.rutaActiva.snapshot.params)['id']);
  }
  constructor(private productosServicios:ProductosService, private rutaActiva:ActivatedRoute){}
  seleccionar(id:number) {
    this.productosServicios.seleccionar(id).subscribe((result:any) => this.producto = result);


  }}
