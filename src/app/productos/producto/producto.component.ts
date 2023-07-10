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



  constructor(private productosServicio:ProductosService) { }

//   seleccionar(id:number) {
//     this.productosServicio.seleccionar(id).subscribe((result:any) => this.producto = result[id]);
//     console.log(this.producto);
//     console.log("hicisteclick");
// }
  ngOnInit() {
  }
}
