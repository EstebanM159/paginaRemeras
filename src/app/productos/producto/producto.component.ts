import { Component, OnInit, Input } from '@angular/core';
import { ProductosService } from 'src/app/productos.service';
import { ProductoClass } from '../../models/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit{

  @Input() id:number=0;
  @Input() nombre:string="";
  @Input() precio: number=0;
  @Input() descripcion: string="";
  @Input() img:string="";
  public ruta:string='../../../assets/';


  constructor(private productosServicio:ProductosService) { }


  ngOnInit() {
  }
}
